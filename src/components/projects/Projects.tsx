import React from 'react';
import { Project } from "../../types"

export const Projects: Array<Project> = [
    {
        title: "ODESSA",
        text: "A trajectory simulator for rocketry, leveraging LLVM compiling for faster simulations. It was built with modularity in mind to support all operations within DARE. ( Different engines, bodies, parachutes, etc.)",
        href: "https://github.com/nsarrazin/odessa",
        button: "Open on GitHub",
        image: "./img/odessa.png"
    },
    {
        title: "AstroPynamics",
        text: "A python package to solve patched conics orbital mechanics problems. Includes a universal Lambert solver for elliptical & hyperbolic solutions.",
        href: "https://github.com/nsarrazin/AstroPynamics",
        button: "Open on GitHub",
        image: "https://worldbirds.com/wp-content/uploads/2020/05/lizard10-1024x652.jpg"
    },
    {
        title: "ProfiloPy",
        text: "A Python package developed to analyze raw profilometer data of aircraft tires, with the goal of measuring tire wear over time.",
        href: "https://github.com/nsarrazin/ProfiloPy",
        button: "Open on GitHub",
        image: "./img/profilopy.png"
    },
    {
        title: "Stochastic Lo-Fi",
        text: "A project to generate Lo-Fi hip-hop algorithmatically using Markov chains and Recurrent Neural Networks.",
        href: "",
        button: "Link coming soon!",
        image: "./img/profilopy.png"
    },
    {
        title: "Chores Planner",
        text: "A project to optimize house chores planning with my roommates. It generates an optimized schedule based on individual preferences.",
        href: "",
        button: "Link coming soon!",
        image: "./img/chores.png"
    },

];
