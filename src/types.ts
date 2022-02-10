import { ReactElement } from "react";

export interface ElementTimeline {
    title: string,
    company?: string,
    shorttext: string,
    fulltext: ReactElement,
    start?: string,
    end?: string
    icon?: any
    skills?: Array<string>,
}