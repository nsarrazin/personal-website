import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import * as THREE from "three";

export const renderSVG = (extrusion:number, svg:string) => {
    const loader = new SVGLoader();
    const svgData = loader.parse(svg);
    const svgGroup = new THREE.Group();
    const updateMap: any[] = [];


    const fillMaterial = new THREE.MeshBasicMaterial({ color: "#F3FBFB" });
    const stokeMaterial = new THREE.LineBasicMaterial({
    color: "#00A5E6",
    });

    
    svgGroup.scale.y *= -1;
    svgData.paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
  
      shapes.forEach((shape) => {
        const meshGeometry = new THREE.ExtrudeGeometry(shape, {
          depth: extrusion,
          bevelEnabled: false,
        });
        const linesGeometry = new THREE.EdgesGeometry(meshGeometry);
        const mesh = new THREE.Mesh(meshGeometry, fillMaterial);
        const lines = new THREE.LineSegments(linesGeometry, stokeMaterial);
  
        updateMap.push({ shape, mesh, lines });
        svgGroup.add(mesh, lines);
      });
    });
  
    const box = new THREE.Box3().setFromObject(svgGroup);
    const size = box.getSize(new THREE.Vector3());
    const yOffset = size.y / -2;
    const xOffset = size.x / -2;
  
    // Offset all of group's elements, to center them
    svgGroup.children.forEach((item) => {
      item.position.x = xOffset;
      item.position.y = yOffset;
    });
    svgGroup.rotateX(-Math.PI / 2);
  
    return svgGroup
  };