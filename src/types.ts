import { ReactElement } from "react";

export interface ElementTimeline {
  title: string;
  company?: string;
  shorttext: string;
  fulltext: ReactElement;
  date?: string;
  icon?: any;
  skills?: Array<string>;
}
export interface Project {
  title: string;
  text: string;
  href: string;
  button: string;
  image: string;
}
