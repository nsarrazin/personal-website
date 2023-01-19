import React from 'react';
import { ElementTimeline } from "../../types"

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

let Content: Array<ElementTimeline> = [
    {
        title: "Full-Stack Developer",
        fulltext:
            <ul>
                <li className="bullet">Collaborated  in a product team following ShapeUp principles, in order to deliver features and modernize the product.</li>
                <li style={{listStyleType:'none', marginLeft:"20px", marginTop:"-10px"}}>
                    <ul>
                    <li className="bullet">Lead the front-end effort to rewrite the flagship product of the company, used by 1000+ users, decreasing time to First Contentful Paint (FCP) by 80% to below 1s</li>
                    <li className="bullet">Delivered new onboarding wizards resulting in 50% less manual work for onboarding new users</li>
                    <li className="bullet">Teamed up with designers & product owners to shape work packages using Shape Up,  then delivered features using React and TypeScript with a Django backend.</li>
                    <li className="bullet">Advocated for front-end best practices within the team, through pair programming and reviews</li>
                    </ul>
                </li>
                <li className="bullet">Overhauled the front-end toolchain of the company, bringing in features such as TypeScript, ES6, bundling, linting and automated CI/CD</li>
                <li className="bullet">Took ownership as a solo dev of a portfolio management project for the biggest client of the company, and delivered the app under time constraints,  helping to close new deals with the customer </li>
            </ul>,
        shorttext: "Working as a fullstack dev for a PropTech scale-up, building features & modernizing a SaaS sustainability app for real-estate customers.",
        company: "hello energy",
        date: "2022 - Now",
        icon: LocationCityIcon,
        skills: ["Python", "React", "JavaScript", "TypeScript", "CI/CD", "Docker", "AWS", "Django", "Figma", "HTML/CSS", "Webpack"]
    },

    {
        title: "Part-Time Software Engineer",
        fulltext:
            <ul>
                <li className="bullet">Delivered an internal web app used to test new predictive models and monitor product pipelines</li>
                <li className="bullet">Developed new dashboard components in the core product using React, TypeScript and CSS</li>
                <li className="bullet">Improved the PDF report generation pipeline of the company in Python</li>
                <li className="bullet">Participated in UX research by making mockups in Figma and testing them in a B2B setting</li>
            </ul>,
        shorttext: "Employed part-time doing webdev, data analysis, building models and a bit of UX for an AgriTech startup.",
        company: "VanBoven",
        date: "2020 - 2022",
        icon: LaptopMacIcon,
        skills: ["Python", "React", "JavaScript", "TypeScript", "CI/CD", "Docker", "UI/UX", "Figma", "HTML/CSS", "pandas"]
    },
    {
        title: "Simulations Engineer",
        fulltext:
            <ul>
                <li className="bullet">Worked as lead on a project to rewrite our in-house trajectory simulator.</li>
                <li className="bullet">Specified the program requirements, its architecture and interfaces with the rest of the tools</li>
                <li className="bullet">Implemented the new simulator architecture, resulting in a 25x speedup of simulations</li>
                <li className="bullet">Test-Driven Development (TDD) with validation of the code using experimental data from NASA</li>
            </ul>,
        shorttext: "Developed trajectory simulators for predicting rocket safety zone for my student rocketry association.",
        company: "DARE",
        date: "2018 - 2020",
        icon: RocketLaunchIcon,
        skills: ["Python", "Numpy", "Numba", "matplotlib", "plotly", "Qt5"]
    },
    {
        title: "HackDelft 2019",
        fulltext:
            <ul>
                <li className="bullet">Built the interface layer to interact with a stock trading API.</li>
                <li className="bullet">Implemented the backend used by the bot's user interface to schedule decisions.</li>
            </ul>,
        shorttext: "Built an interactive trading bot for a hackathon. Placed 2nd in the category.",
        company: "MLH",
        date: "May 2019",
        icon: CoffeeIcon,
        skills: ["Python", "HTML/CSS", "JavaScript"]
    },
    {
        title: "BSc. Aerospace Engineering",
        fulltext:
            <ul>
                <li className="bullet">Contributed to five group projects where teamwork, clear communication and setting priorities were critical to our success.</li>
                <li className="bullet">Wrote a Python module to analyze wearing-out of aircraft tires from noisy sensor data.</li>
            </ul>,
        shorttext: "Currently finishing my degree in Aerospace Engineering !",
        company: "TU Delft",
        date: "2017 - now",
        icon: SchoolIcon,
        skills: ["Python", "Numpy", "matplotlib"]
    },
    {
        title: "Engineering Olympiads 2015",
        fulltext:
            <ul>
                <li className="bullet">Designed a 3D-printed vertical axis wind turbine with smart power control. </li>
                <li className="bullet">Wrote the embedded software for the microcontroller using an Arduino.</li>
                <li className="bullet">Programmed the user interface in Python using Tkinter.</li>
            </ul>,
        shorttext: "Built a smart wind turbine for HS engineering olympiads. Placed 4th out of 40+ contestants",
        company: "France",
        date: "2015",
        icon: SettingsIcon,
        skills: ["Python", "Arduino"]
    },

]
export default Content;
