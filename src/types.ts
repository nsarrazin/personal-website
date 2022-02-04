import { ReactElement } from "react";

export interface Skill {
    name: string,
    type: string
}

export interface ElementTimeline {
    title: string,
    company?: string,
    text: ReactElement,
    skills?: Array<Skill>,
    start?: string,
    end?: string
    icon?: any
}