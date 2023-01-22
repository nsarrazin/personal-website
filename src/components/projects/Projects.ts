import { Project } from "../../types";

export const Projects: Array<Project> = [
  {
    title: "ODESSA",
    text: "A trajectory simulator for rocketry, leveraging LLVM for peformance. It was built with modularity in mind to support all operations within DARE.",
    href: "https://github.com/nsarrazin/odessa",
    button: "Open on GitHub",
    image: "./img/odessa.png",
  },
  {
    title: "AstroPynamics",
    text: "A python package to solve patched conics orbital mechanics problems. Includes a universal Lambert solver for elliptical & hyperbolic solutions.",
    href: "https://github.com/nsarrazin/AstroPynamics",
    button: "Open on GitHub",
    image: "./img/astropynamics.png",
  },
  {
    title: "ProfiloPy",
    text: "A Python package developed to analyze profilometer data of aircraft tires, with the goal of measuring tire wear over time.",
    href: "https://github.com/nsarrazin/ProfiloPy",
    button: "Open on GitHub",
    image: "./img/profilopy.png",
  },
  {
    title: "Skin stretching analysis",
    text: "Some data analysis I did for a friend's thesis, measuring the displacement of our skin depending on our posture to help us sit better.",
    href: "/skinstretch.html",
    button: "Open the notebook",
    image: "./img/skinstretch.png",
  },
  {
    title: "Stochastic Lo-Fi",
    text: "A project to generate Lo-Fi hip-hop algorithmatically using Markov chains and Recurrent Neural Networks.",
    href: "",
    button: "Link coming soon!",
    image: "./img/stochastic.png",
  },
  {
    title: "Chores Planner",
    text: "A project to optimize house chores planning with my roommates. It generates an optimized schedule based on individual preferences.",
    href: "",
    button: "Link coming soon!",
    image: "./img/chores.png",
  },
];
