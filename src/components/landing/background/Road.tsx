import { Plane } from '@react-three/drei'
import React from 'react'
import { shaderMaterial } from '@react-three/drei';
import glsl from "babel-plugin-glsl/macro";
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { useTheme } from '@material-ui/core';

const fragShader = glsl`
#define AA 2
#define speed 1. 

//you can add any sound texture in iChannel0 to turn it into a cool audio visualizer (it looks better with lower speeds though)
//you should commment out or remove the following line to enable it:
#define disable_sound_texture_sampling


vec4 textureMirror(sampler2D tex, vec2 c){
    #ifdef disable_sound_texture_sampling
    return vec4(0);
    #else
    vec2 cf = fract(c);
    return texture(tex,mix(cf,1.-cf,mod(floor(c),2.)));
    #endif
}

float jTime;

float amp(vec2 p){
    return smoothstep(1.,8.,abs(p.x));   
}

float pow512(float a){
    a*=a;//^2
    a*=a;//^4
    a*=a;//^8
    a*=a;//^16
    a*=a;//^32
    a*=a;//^64
    a*=a;//^128
    a*=a;//^256
    return a*a;
}
float pow1d5(float a){
    return a*sqrt(a);
}
float hash21(vec2 co){
    return fract(sin(dot(co.xy,vec2(1.9898,7.233)))*45758.5433);
}
float hash(vec2 uv){
    float a = amp(uv);
    float w=1.;
    return (a>0.?
        a*pow1d5(
        hash21(uv)
        )*w
        :0.)-(textureMirror(iChannel0,vec2((uv.x*29.+uv.y)*.03125,1.)).x)*.25;
}

float edgeMin(float dx,vec2 da, vec2 db,vec2 uv){
    uv.x+=5.;
    vec3 c = fract((round(vec3(uv,uv.x+uv.y)))*(vec3(0,1,2)+0.61803398875));
    float a1 = textureMirror(iChannel0,vec2(c.y,0.)).x>.6?.15:1.;
    float a2 = textureMirror(iChannel0,vec2(c.x,0.)).x>.6?.15:1.;
    float a3 = textureMirror(iChannel0,vec2(c.z,0.)).x>.6?.15:1.;

    return min(min((1.-dx)*db.y*a3,da.x*a2),da.y*a1);
}

vec2 trinoise(vec2 uv){
    const float sq = sqrt(3./2.);
    uv.x *= sq;
    uv.y -= .5*uv.x;
    vec2 d = fract(uv);
    uv -= d;

    bool c = dot(d,vec2(1))>1.;

    vec2 dd = 1.-d;
    vec2 da = c?dd:d,db = c?d:dd;
    
    float nn = hash(uv+float(c));
    float n2 = hash(uv+vec2(1,0));
    float n3 = hash(uv+vec2(0,1));

    
    float nmid = mix(n2,n3,d.y);
    float ns = mix(nn,c?n2:n3,da.y);
    float dx = da.x/db.y;
    return vec2(mix(ns,nmid,dx),edgeMin(dx,da, db,uv+d));
}


vec2 map(vec3 p){
    vec2 n = trinoise(p.xz);
    return vec2(p.y-2.*n.x,n.y);
}

vec3 grad(vec3 p){
    const vec2 e = vec2(.005,0);
    float a =map(p).x;
    return vec3(map(p+e.xyy).x-a
                ,map(p+e.yxy).x-a
                ,map(p+e.yyx).x-a)/e.x;
}

vec2 intersect(vec3 ro,vec3 rd){
    float d =0.,h=0.;
    for(int i = 0;i<500;i++){ //look nice with 50 iterations
        vec3 p = ro+d*rd;
        vec2 s = map(p);
        h = s.x;
        d+= h*.5;
        if(abs(h)<.003*d)
            return vec2(d,s.y);
        if(d>150.|| p.y>2.) break;
    }
    
    return vec2(-1);
}


float starnoise(vec3 rd){
    float c = 0.;
    vec3 p = normalize(rd)*300.;
	for (float i=0.;i<4.;i++)
    {
        vec3 q = fract(p)-.5;
        vec3 id = floor(p);
        float c2 = smoothstep(.5,0.,length(q));
        c2 *= step(hash21(id.xz/id.y),.06-i*i*0.005);
        c += c2;
        p = p*.6+.5*p*mat3(3./5.,0,4./5.,0,1,0,-4./5.,0,3./5.);
    }
    c*=c;
    float g = dot(sin(rd*10.512),cos(rd.yzx*10.512));
    c*=smoothstep(-3.14,-.9,g)*.5+.5*smoothstep(-.3,1.,g);
    return c*c;
}

vec3 gsky(vec3 rd,vec3 ld,bool mask){
    float haze = exp2(-5.*(abs(rd.y)-.2*dot(rd,ld)));
    

    //float st = mask?pow512(texture(iChannel0,(rd.xy+vec2(300.1,100)*rd.z)*10.).r)*(1.-min(haze,1.)):0.;
    //float st = mask?pow512(hash21((rd.xy+vec2(300.1,100)*rd.z)*10.))*(1.-min(haze,1.)):0.;
    float st = mask?(starnoise(rd))*(1.-min(haze,1.)):0.;
    vec3 back = vec3(.3,.3,.2)*(1.-.5*textureMirror(iChannel0,vec2(.5+.05*rd.x/rd.y,0.)).x
    *exp2(-.1*abs(length(rd.xz)/rd.y))
    *max(sign(rd.y),0.));
    vec3 col=clamp(mix(back,vec3(.1,.1,.1),haze)+st,0.,1.);
    return col;  
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    fragColor=vec4(0);
    #ifdef AA
    for(float x = 0.;x<1.;x+=1./float(AA)){
    for(float y = 0.;y<1.;y+=1./float(AA)){
    #else
        const float AA=1.,x=0.,y=0.;
    #endif
    vec2 uv = (2.*(fragCoord+vec2(x,y))-iResolution.xy)/iResolution.y;

    float dt = fract(hash21(float(AA)*(fragCoord+vec2(x,y)))+iTime*0.25);
    jTime = mod(iTime-dt*iTimeDelta*.25,4000.);
    vec3 ro = vec3(0.,1,(-20000.+jTime*speed*0.2));
    
    vec3 rd = normalize(vec3(uv,4./3.));//vec3(uv,sqrt(1.-dot(uv,uv)));
    
    vec2 i = intersect(ro,rd);
    float d = i.x;
    
    vec3 ld = normalize(vec3(0,.125+.05*sin(.1*jTime),1));

    vec3 fog = d>0.?exp2(-d*vec3(.1,.1,.15)):vec3(0.); 
    vec3 sky = gsky(rd,ld,d<0.);
    
    vec3 p = ro+d*rd;
    vec3 n = normalize(grad(p));
    
    float diff = dot(n,ld)+.1*n.y;
    vec3 col = vec3(.5,.5,.5)*diff;
    
    vec3 rfd = reflect(rd,n); 
    vec3 rfcol = gsky(rfd,ld,true);
    
    col = mix(col,rfcol,.05+.95*pow(max(1.+dot(rd,n),0.),5.));
    col = mix(col,vec3(0.96, 0.9137, 0.811),smoothstep(.01,.0,i.y));
    col = mix(sky,col,fog);
    
    //no gamma for that old cg look
    if(d<0.)
        d=1e6;
        
    d=min(d,10.);
    fragColor += vec4(clamp(col,0.,1.),d<0.?0.:.1+exp2(-d));
     #ifdef AA
    }
    }
    fragColor/=float(AA*AA);
    #endif
}
`

type Props = {}

const SCALE = 160;
const SPEED = 2;
const TEXTURE_PATH = "grid-modified.png";
const DISPLACEMENT_PATH = "displacement.png";
const METALNESS_PATH = "metalness.png";

const Road = (props: Props) => {
    const [texture, displacement, metal] = useLoader(TextureLoader, [TEXTURE_PATH, DISPLACEMENT_PATH, METALNESS_PATH]);
    const wall1 = React.useRef<Mesh>(null)
    const wall2 = React.useRef<Mesh>(null)
    const wall3 = React.useRef<Mesh>(null)

    useFrame((e)=>{
        const t = e.clock.elapsedTime
        wall1.current && wall1.current.position.setComponent(2, (t*SPEED)%SCALE-SCALE+SCALE/1.5);
        wall2.current && wall2.current.position.setComponent(2, (t*SPEED)%SCALE-SCALE*2+SCALE/1.5)
        wall3.current && wall3.current.position.setComponent(2, (t*SPEED)%SCALE-SCALE*3+SCALE/1.5)

    })
  return (
      <>
        <mesh rotation={[-Math.PI/2, 0, 0]} scale={[80, 80, 80]} position={[0, -1, 0]} ref={wall1}>
            <planeGeometry attach="geometry" args={[1, 2, 24,24]}/>
            <meshStandardMaterial
                attach='material'
                map={texture}
                displacementMap={displacement}
                displacementScale={0.4}
                metalnessMap={metal}
                metalness={0.96}
                roughness={0.5}
            />
        </mesh>
        <mesh rotation={[-Math.PI/2, 0, 0]} scale={[80, 80, 80]} position={[0, -1, 0]} ref={wall2}>
            <planeGeometry attach="geometry" args={[1, 2, 24,24]}/>
            <meshStandardMaterial
                attach='material'
                map={texture}
                displacementMap={displacement}
                displacementScale={0.4}
                metalnessMap={metal}
                metalness={0.96}
                roughness={0.5}
            />
        </mesh>
        <mesh rotation={[-Math.PI/2, 0, 0]} scale={[80, 80, 80]} position={[0, -1, 0]} ref={wall3}>
            <planeGeometry attach="geometry" args={[1, 2, 24,24]}/>
            <meshStandardMaterial
                attach='material'
                map={texture}
                displacementMap={displacement}
                displacementScale={0.4}
                metalnessMap={metal}
                metalness={0.96}
                roughness={0.5}
            />
        </mesh>
      </>
  )
}

export default Road