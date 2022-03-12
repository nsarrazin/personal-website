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
        title: "Student Software Engineer",
        fulltext:
            <ul>
                <li className="bullet">Worked on developing an internal webapp to test new models and monitor product pipelines</li>
                <li className="bullet">Contributed to the main product by developing new webapp components</li>
                <li className="bullet">Participated in UX research by making Figma mockups and testing them in a B2B setting</li>
                <li className="bullet">Performed data analysis on customer data to better identify needs & wants of the customer</li>

            </ul>,
        shorttext: "Working student doing webdev, data analysis and a bit of UX for an AgriTech startup.",
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
        title: "Technical Assistant",
        fulltext:
            <ul>
                <li className="bullet">Overhauled the townhall's physical and digital archival procedures based on French legislation.</li>
                <li className="bullet">Implemented automatic archival using custom OCR Python scripts.</li>

            </ul>,
        shorttext: "Helped the town with archives and network administration.",
        company: "Voulangis City Hall",
        date: "July - August 2019",
        icon: LocationCityIcon,
        skills: ["Python"]
    },
    {
        title: "HackDelft 2019",
        fulltext:
            <ul>
                <li className="bullet">Built the interface to interact with the trading API.</li>
                <li className="bullet">Implemented the backend to the bot's user interface.</li>
            </ul>,
        shorttext: "Built an interactive trading bot for a hackathon.",
        company: "MLH",
        date: "May 2019",
        icon: CoffeeIcon,
        skills: ["Python", "HTML/CSS", "JavaScript"]
    },
    {
        title: "BSc. Aerospace Engineering",
        fulltext:
            <ul>
                <li className="bullet">Took relevant quantitative courses such as Data Analysis, programming in Python and Probability & Statistics. </li>
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
