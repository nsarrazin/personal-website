import { ReactElement } from "react";

export interface Skill {
    name: string,
    type: string
}

export interface ElementTimeline {
    title: string,
    company?: string,
    shorttext: string,
    fulltext: ReactElement,
    start?: string,
    end?: string
    icon?: any
    skills?: Array<Skill>,
}