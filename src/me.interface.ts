import { baseTheme } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type ITheme = keyof typeof baseTheme.colors;

export interface IMe {
  name: string;
  facts?: string[];
  subtitle: string;
  tagline: string;
  bigHeading: { black: string; blue: string };
  about: string;
  location: string;
  image: string;
  education: IEducation[];
  experience: IExperience[];
  publications: IPublication[];
  projects: IProject[];
  skills: ISkill[];
  social: ISocial[];
  contact: IContact;
}

interface IEducation {
  degree: string;
  major: string;
  school: string;
  graduation: string;
  awards?: string[];
}

interface IExperience {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: string[];
}

interface IPublication {
  authors: string;
  title: string;
  journal?: string;
  year?: string;
  details?: string;
  doi?: string;
  pmid?: string;
  url?: string;
  status: "Published" | "In Press" | "Under Review" | "Preprint" | "In Preparation";
}

interface IProject {
  name: string;
  description: string;
  contribution: string;
  technologies: string[];
  links: ILink[];
  image?: string;
  backgroundImage?: string;
}

interface ISkill {
  name: string;
  icon: IconType;
}

interface ISocial {
  name: string;
  icon: IconType;
  uri: string;
  hover: {
    color: string;
    bg: [string, string];
  };
}

interface IContact {
  email: string;
}

interface ILink {
  name: string;
  uri: string;
}
