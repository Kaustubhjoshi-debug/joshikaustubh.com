import { AiFillExperiment } from "react-icons/ai";
import { LuPipette } from "react-icons/lu";
import {
  FaBacteria,
  FaLinkedin,
  FaNewspaper,
} from "react-icons/fa";
import { GiSkullWithSyringe, GiSoapExperiment, GiVirus } from "react-icons/gi";
import { TiPipette } from "react-icons/ti";

import { TbAlertHexagon, TbCell } from "react-icons/tb";
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
  subtitle: "Pharmaceutical Sciences Graduate Student",
  tagline:
    "Driven by a passion for pharmaceutical innovation and discovery science.",
  bigHeading: {
    black: "Advancing",
    blue: "Pharma Sciences",
  },
  about:
    "I am currently working at GlaxoSmithKline (GSK), where I focus on drug discovery and metabolism, leveraging cellular models for transporter-driven drug research. I recently completed my Master’s in Pharmaceutical Sciences at the University of Maryland School of Pharmacy specializing in bioanalytical methods, lipidomics, and drug development. My professional journey has taken me from studying lipidomic profiles in academic research to analyzing molecular markers at the Ministry of Defence, providing me with a diverse set of skills in both drug metabolism and pharmacokinetics (DMPK).",
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
      degree: "Bachelor of Pharmacy",
      major: "Pharmaceutical Sciences",
      school: "D Y Patil University, Pune",
      graduation: "June 2023",
      awards: [
        "Relevant Coursework: Medicinal Chemistry, Pharmaceutics, Pharmacology, Molecular Biology, Instrumental Analysis, Pathophysiology, Novel Drug Delivery Systems, Pharmaceutical Biotechnology, Organic Chemistry"
      ]
    },
  ],
  experience: [
    {
      company: "Translational Tissue Engineering Center, Wilmer Eye Institute, Johns Hopkins Medicine",
      location: "Baltimore, MD",
      position: "Research Technologist",
      duration: "April 2025 - Present",
      bullets: [
        "Generating a stem cell bank of over 30 human patient-derived iPSC lines, optimizing cell culture conditions to maximize pluripotency and viability, and cryopreserving stem cells under strict aseptic conditions.",
        "Generating first-in-kind novel human brain assembloids from control iPSCs that recreate brain cytoarchitecture and maintain mature synaptic activity, establishing a physiologic platform for neurodegenerative studies.",
        "Developing a co-culture system with patient-derived JHH-DIPG1 cells; employing live-cell imaging and multielectrode arrays to quantify tumor infiltration, neuronal viability, and network electrophysiology in real time.",
        "Conducting immunostaining, confocal imaging, and multielectrode array recordings to assess structural and electrophysiological maturation.",
        "Collaborating with Emory University School of Medicine to screen 15 investigational compounds on healthy vs. glioblastoma tumor-bearing organoids, validating the model as a predictive preclinical assay for CNS drug discovery.",
      ],
    },
    {
      company: "Analytical Biochemistry, Elsevier",
      location: "Remote",
      position: "Peer Reviewer",
      duration: "Nov 2025 - Present",
      bullets: [
        "Invited to serve as a peer reviewer for Analytical Biochemistry, evaluating manuscript quality, scientific rigor, and methodological validity for publication consideration.",
        "Critically assessing submitted research articles, providing constructive feedback to authors and editorial recommendations to advance scientific publishing standards.",
      ],
    },
    {
      company: "Johns Hopkins University",
      location: "Baltimore, MD",
      position: "Research Advisor and Mentor",
      duration: "Oct 2025 - Present",
      bullets: [
        "Providing guidance on navigating academic research opportunities, connecting undergraduate students with faculty laboratories and research programs.",
        "Mentoring students in developing research skills, including literature review, experimental design, and data analysis techniques.",
        "Collaborating with E-Board members to organize research symposia, networking events, and programming that promotes undergraduate research engagement.",
      ],
    },
    {
      company: "International Society for Stem Cell Research (ISSCR)",
      location: "Remote",
      position: "Affiliate Reviewer and Program Ambassador",
      duration: "June 2025 - Present",
      bullets: [
        "Reviewed 20+ abstracts for AI and Digital Biology Symposium (Oct. 2025) and delivered confidential, criteria-based evaluations. Ongoing reviewer for upcoming scientific conferences.",
        "Promoting conferences and scientific sessions, connecting attendees across institutions, and stewarding an online community for scientists to exchange ideas.",
        "Promoting abstract submission deadlines and opportunities across different channels; curating concise previews/recaps and resource guides to support engagement.",
      ],
    },
    {
      company: "GlaxoSmithKline (GSK)",
      location: "Collegeville, PA",
      position: "Research Associate Co-op",
      duration: "June 2024 - April 2025",
      bullets: [
        "Cross-validated a transporter-mediated hepatic uptake assay using suspension and plateable hepatocytes to accurately predict in vivo behavior from in vitro data.",
        "Supported GSK's efforts in screening investigational compounds using bidirectional MDCK-MDR1, and BCRP assays to assess drug permeability and efflux.",
        "Performed metabolic stability assays for determining the intrinsic clearance of test compounds in cryopreserved suspension hepatocytes across multiple species.",
        "Contributed to Tier-1 and Standard in vitro early drug discovery studies using automated liquid handlers (Tecan), including hepatocyte clearance and uptake, microsomal clearance and binding, and MDCK permeability.",
        "Characterized the non-specific binding of GSK test compounds in human and rat microsomes using a rapid equilibrium dialysis method and analyzed them using TIBCO Spotfire.",
      ],
    },
    {
      company: "University of Maryland School of Pharmacy",
      location: "Baltimore, MD",
      position: "Research Assistant (Dr. Jace Jones Lab)",
      duration: "Oct 2023 - June 2024",
      bullets: [
        "Optimized methods for oligonucleotide analysis, utilizing buffer exchange, MALDI-TOF mass spectrometry, LC-MS, and nanodrop techniques.",
        "Supported and contributed in characterizing diastereomeric separation of phosphorothioated oligonucleotides using Ion Pair Reverse Phase (IPRP), Metal Ion Complexation Chromatography (MICC), and Reverse Phase Strong Anion Exchange (RP-SAX).",
        "Observed and compared Hydrophilic Interaction Liquid Chromatography (HILIC) in negative and positive ionization modes with RPLC to assess optimal resolution in lipid analysis.",
        "Processed lipidomic analysis data from MS and UPLC systems using Tracefinder, Xcalibur, and Excel.",
      ],
    },
    {
      company: "Department of Occupational Health and Safety, Department of Defense",
      location: "New Delhi, India",
      position: "Research Intern",
      duration: "Aug 2022 - Oct 2022",
      bullets: [
        "Conducted research on the effects of radio-wave exposure on molecular markers pertaining to inflammation, heat shock proteins, metabolism, and cell survival and apoptosis in Sprague Dawley rats.",
        "Prepared tissue homogenates using ultrasonication and homogenization for estimation of biochemical markers, resolved and detected the extracted protein using immunoblotting.",
        "Employed different ELISAs for the quantification of TNF-\u03B1, IL-1\u03B2, NOS2/iNOS, COX-2, NF-\u03BAB, 4-HNE adduct.",
      ],
    },
    {
      company: "The Haffkine Institute for Training, Research, and Testing",
      location: "Mumbai, India",
      position: "Research Intern (Department of Chemotherapy)",
      duration: "Jan 2022 - March 2022",
      bullets: [
        "Performed sample derivatization for GC-MS and utilized HPLC and GC-MS to investigate neonatal diseases.",
        "Contributed to the development and validation of bioanalytical methods for the estimation of Zidovudine.",
        "Implemented HPLC, GC-MS, and FTIR for drug samples sent by companies to check their purity.",
      ],
    },
  ],
  projects: [
    {
      name: "Assessing DMPK In Vitro Parameters",
      description:
        "Cross-validating transporter-mediated hepatic uptake assay using suspension and plateable hepatocytes to accurately predict in vivo behavior from in vitro data.",
      contribution:
        "Designed and executed transporter assays for hepatic uptake, supported screening investigational compounds for membrane permeability using MDCK-MDR1 and BCRP assays, and performed metabolic stability studies on various species’ hepatocytes.",
      technologies: ["Drug Transporters", "MDCK-MDR1/BCRP Assays", "Intrinsic Clearance"],
      links: [],
    },
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
      icon: LuPipette
    },
    {
      name: "Assay Development",
      icon: TiPipette
    },
    {
      name: "High Throughput Screening",
      icon: GiSkullWithSyringe,
    },
    {
      name: "ADME Assays",
      icon: GiSoapExperiment,
    },
    {
      name: "ELISA",
      icon: FaBacteria,
    },
    {
      name: "LC-MS",
      icon: TbAlertHexagon
    },
    {
      name: "LNP Synthesis",
      icon: TbCell
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
      icon: AiFillExperiment,
    },
    {
      name: "TIBCO Spotfire",
    },
    {
      name: "PyMOL",
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
