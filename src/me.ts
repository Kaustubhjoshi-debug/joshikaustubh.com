import { AiFillExperiment } from "react-icons/ai";
import {
  FaBacteria,
  FaLinkedin,
  FaNewspaper,
} from "react-icons/fa";
import { GiSkullWithSyringe, GiSoapExperiment, GiVirus } from "react-icons/gi";

import { TbCell } from "react-icons/tb";
import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "purple";

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
  location: "Upper Providence, PA",
  image: "/assets/kaustubh-joshi.jpg",
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
      name: "Lipidomic Analysis Pipeline",
      description:
        "Developed a lipidomic analysis pipeline for identifying and quantifying lipid species from plasma samples.",
      contribution:
        "Utilized LC-MS/MS and solid-phase extraction (SPE) methods to streamline lipid extraction and analysis. Processed data using Tracefinder and Xcalibur to interpret results for comprehensive lipid profiling.",
      technologies: ["LC-MS/MS", "SPE", "Tracefinder", "Xcalibur"],
      links: [],

    },
    {
      name: "Oligonucleotide Characterization",
      description:
        "Method development for oligonucleotide analysis using advanced techniques.",
      contribution:
        "Refined methods for oligonucleotide purification and analysis using buffer exchange, MALDI-TOF, LC-MS, and nanodrop spectroscopy.",
      technologies: ["MALDI-TOF", "LC-MS", "Nanodrop Spectroscopy"],
      links: []
    },
    {
      name: "Radio-Wave Exposure Research",
      description:
        "Studied the effects of radio-wave exposure on biochemical markers in rats.",
      contribution:
        "Performed Western Blotting, ELISAs, and enzymatic assays to identify molecular markers linked to inflammation, metabolism, and cell survival.",
      technologies: ["Western Blot", "ELISA", "Enzymatic Assays"],
      links: []
    },
  ],
  skills: [
    {
      name: "Mammalian Cell Culture",
    },
    {
      name: "Assay Development",
    },
    {
      name: "High Throughput Screening",
      icon: GiSkullWithSyringe,
    },
    {
      name: "ADME Assays",
    },
    {
      name: "ELISA",
      icon: FaBacteria,
    },
    {
      name: "LC-MS",
    },
    {
      name: "LNP Synthesis",
    },
    {
      name: "In-Vitro Studies",
      icon: GiSoapExperiment,
    },
    {
      name: "In-Vivo Studies",
      icon: AiFillExperiment,
    },
    {
      name: "Immunohistochemistry",
      icon: GiVirus,
    },
    {
      name: "Western Blotting",
    },
    {
      name: "TIBCO Spotfire",
    },
    {
      name: "PyMOL",
      icon: TbCell,
    },
    {
      name: "Xcalibur",
    },
    {
      name: "ADMET Predictor",
    },
    {
      name: "GraphPad Prism",
    },
    {
      name: "TraceFinder",
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
