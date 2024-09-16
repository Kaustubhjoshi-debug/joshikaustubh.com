import { DiScrum } from "react-icons/di";
import {
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiAmazonaws,
  SiC,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Kaustubh Joshi",
  // Facts are optional
  facts: [
    "Currently pursuing a Master's in Pharmaceutical Sciences.",
    "Specializing in bioanalytical methods, pharmacology, and lipidomic analysis.",
    "Actively contributing to drug discovery and screening processes at GSK.",
    "Developed transporter-mediated hepatic uptake assays using the oil spin method.",
    "Previously worked at the Ministry of Defence researching molecular markers from radio-wave exposure.",
    "Proficient in mammalian cell culture, LC-MS/MS, SPE, and a range of bioanalytical techniques.",
  ],
  subtitle: "Pharmaceutical Sciences Student",
  tagline:
    "Driven by a passion for pharmaceutical innovation and analytical science.",
  bigHeading: {
    black: "Advancing",
    blue: "Pharma Sciences",
  },
  about:
    "I am currently pursuing a Master’s in Pharmaceutical Sciences at the University of Maryland, specializing in bioanalytical methods, lipidomics, and drug development. My experiences range from drug discovery research at GSK to analyzing molecular markers at the Ministry of Defence.",
  location: "Amherst, MA",
  image: "/assets/arhammusheer.jpeg",
  education: [
    {
      degree: "Master of Science",
      major: "Pharmaceutical Sciences",
      school: "University of Maryland, Baltimore",
      graduation: "Dec 2024",
      awards: [
        "Relevant Coursework: Bioanalytical and Pharmacological Methods, Principles of Drug Discovery, Principles of Drug Development, Technical Writing, Experimental Success, Spectrometric Methods, Process Analytical Technologies"
      ],
    },
    {
      degree: "Bachelor of Science",
      major: "Pharmacy",
      school: "D Y Patil University, Pune, India",
      graduation: "June 2023",
      awards: [],
    },
  ],
  experience: [
    {
      company: "GlaxoSmithKline (GSK)",
      location: "Upper Providence, PA",
      position: "Scientific Student Researcher (Discovery DMPK In-Vitro)",
      duration: "June 2024 - Present",
      bullets: [
        "Developing a novel transporter-mediated hepatic uptake assay using the oil spin method to predict in vivo behavior from in vitro data.",
        "Screening investigational compounds using bidirectional Caco-2, MDCK-MDR1, and BCRP assays to assess membrane permeability and efflux.",
        "Culturing MDCK-MDR1 and BCRP-MDCK cells to predict CNS penetration.",
        "Performing metabolic stability assays to determine the intrinsic clearance of test compounds.",
      ],
    },
    {
      company: "University of Maryland School of Pharmacy",
      location: "Baltimore, MD",
      position: "Research Intern (Jace Jones Lab, Mass Spectrometry Center)",
      duration: "Oct 2023 - June 2024",
      bullets: [
        "Optimized methods for analyzing oligonucleotides using buffer exchange, MALDI-TOF, LC-MS, and nanodrop.",
        "Characterized lipid composition using solid phase extraction and LC-MS.",
        "Processed lipidomic analysis data from MS and UPLC systems using Tracefinder and Xcalibur.",
      ],
    },
    {
      company: "Defence Research and Development Organisation, Ministry of Defence",
      location: "New Delhi, India",
      position: "Research Assistant Intern",
      duration: "Aug 2022 - Oct 2022",
      bullets: [
        "Researched molecular markers from radio-wave exposure on inflammation, metabolism, and cell survival in Sprague Dawley rats.",
        "Prepared tissue homogenates and performed protein analysis using SDS-PAGE and Western Blotting.",
        "Quantified biochemical markers and regulatory enzymes using ELISAs and enzymatic assays.",
      ],
    },
  ],
  projects: [
    {
      name: "AudioShelf",
      description:
        "A mobile app with over 2k users to discover audiobooks in 30 languages and summarize them in 5 minutes.",
      contribution:
        "I built the backend infrastructure for the app, including authentication systems, OAuth scope, and a REST API. I also built an internal CMS dashboard to manage content publishing and translations.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://getaudioshelf.com",
        },
        {
          name: "Play Store",
          uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Bus Tracker IoT",
      description:
        "An always-connected IoT device which lets me track when the next bus will leave my stop, helping me save time and plan better every morning.",
      contribution:
        "I built the entire IoT device from scratch using an ESP32, Arduino, and wrote a relay server in Node.js, and pulled data from the UMass Transit API to display the next bus time.",
      technologies: [
        "Node.js",
        "TypeScript",
        "ESP32",
        "Arduino",
        "C++",
        "Google Cloud",
      ],
      links: [
        { name: "Image", uri: "/assets/bus-tracker.png" },
        {
          name: "Write Up",
          uri: "https://github.com/arhammusheer/bus-tracker",
        },
      ],
      image: "/assets/bus-tracker.png",
      backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Croissant Paste It",
      description:
        "Ever wanted a place to dump some text and share it with someone or yourself on another device? Me too! So I built an app for your pasting needs.",
      contribution:
        "I designed and wrote the app in TypeScript with backend in Node.js and Express and the frontend in React.js. I also deployed the app on railway.app.",
      technologies: ["Node.js", "Express", "React", "TypeScript", "Railway"],
      links: [
        {
          name: "Website",
          uri: "https://paste.croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/paste.croissant.one",
        },
      ],
      image: "/assets/croissant-paste-it.png",
    },
    {
      name: "Lord of the Lunchroom",
      description:
        "A project for HackUMass which lets 2 people in a cowboy duel smart hats to see who wins the table in the Worcester dining hall. The project won the 'Funnest Hack' award.",
      contribution:
        "I wrote the code for the matchmaking server and the Arduino smart hats, which used infrared technology as guns and detectors, and displays to show the match status.",
      image: "/assets/lord-of-the-lunchroom.jpg",
      backgroundImage: "/assets/lord-of-the-lunchroom.jpg",
      technologies: ["Node.js", "JavaScript", "ESP8266", "Arduino", "C++"],
      links: [
        {
          name: "Devpost",
          uri: "https://devpost.com/software/lord-of-the-lunchroom",
        },
        { name: "Image", uri: "/assets/lord-of-the-lunchroom.jpg" },
      ],
    },
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume.",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines.",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Try It Out",
          uri: "https://dad.croissant.one",
        },
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/dad-api",
        },
      ],
      image: "/assets/dad.png",
    },
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Golang",
      icon: SiGo,
    },
    {
      name: "Bash/Shell",
      icon: SiGnubash,
    },
    {
      name: "Embedded Systems",
      icon: HiChip,
    },
    {
      name: "C",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "AWS",
      icon: SiAmazonaws,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Agile/Scrum",
      icon: DiScrum,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Kaustubh-Joshi-Resume.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/kaustubh-joshipsar",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "kaustubhjoshi@umaryland.edu",
  },
} as IMe;
