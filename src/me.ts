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
    "Research Technologist at Johns Hopkins Medicine building multi-region human organoid and assembloid models.",
    "Completed an M.S. in Pharmaceutical Sciences at the University of Maryland School of Pharmacy.",
    "Experienced across discovery DMPK, organoid disease modeling, and translational preclinical assay development.",
    "Contributor to multi-institution collaborations spanning academia, industry, and U.S. government research groups.",
    "Active in peer review and scientific mentoring through Elsevier, ISSCR, and Johns Hopkins research communities.",
    "Proficient in stem cell culture, organoid engineering, transcriptomics prep, electrophysiology, and advanced bioanalytics.",
  ],
  subtitle: "Research Technologist | Translational Tissue Engineering",
  tagline:
    "Building human-relevant brain and tumor models for translational neuroscience and drug discovery.",
  bigHeading: {
    black: "Advancing",
    blue: "Pharma Sciences",
  },
  about:
    "I am a Research Technologist at the Translational Tissue Engineering Center at Johns Hopkins Medicine, where I develop patient-derived iPSC and organoid platforms for CNS disease modeling and therapeutic screening. My training spans translational stem cell biology, electrophysiology, and RNA-seq sample preparation, with prior industry experience in discovery DMPK at GSK and bioanalytical method development at the University of Maryland. I focus on building reproducible, human-relevant preclinical systems that bridge mechanistic biology and drug development.",
  location: "Baltimore, MD",
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
        "Built and maintained a stem cell bank of 30+ patient-derived iPSC lines, optimizing media formulations, inhibitors, and matrix coatings for pluripotency and viability.",
        "Generated cerebral, retinal, brainstem, olfactory placode, spinal, and vascular endothelial organoids, including long-term differentiation and maturation workflows.",
        "Developed first-in-kind multi-region human brain assembloids and DIPG co-culture assays; used live-cell imaging and multielectrode arrays to quantify invasion, viability, and network function.",
        "Prepared samples for scRNA-seq and bulk RNA-seq, ran cell-toxicity studies, and integrated structural and electrophysiologic readouts for preclinical screening.",
        "Collaborated across academic, industry, and U.S. Department of Defense partners; trained new lab members and supported grant strategy from ideation through submission.",
      ],
    },
    {
      company: "Analytical Biochemistry, Elsevier",
      location: "Remote",
      position: "Peer Reviewer",
      duration: "Nov 2025 - Present",
      bullets: [
        "Invited reviewer assessing manuscript rigor, data quality, and methodological validity for publication decisions.",
        "Provide structured editorial recommendations and constructive author feedback to strengthen scientific reporting standards.",
      ],
    },
    {
      company: "Johns Hopkins University",
      location: "Baltimore, MD",
      position: "Research Advisor and Mentor",
      duration: "Oct 2025 - Present",
      bullets: [
        "Mentor undergraduates on research pathways, graduate applications, and professional development in biomedical science.",
        "Guide trainees in literature review, experimental design, data analysis, and research communication.",
        "Co-organize symposia and workshops that expand equitable undergraduate access to research opportunities.",
      ],
    },
    {
      company: "International Society for Stem Cell Research (ISSCR)",
      location: "Remote",
      position: "Affiliate Reviewer and Program Ambassador",
      duration: "June 2025 - Present",
      bullets: [
        "Reviewed 20+ abstracts for the AI and Digital Biology Symposium and delivered confidential, criteria-based evaluations.",
        "Promote conference sessions, abstract deadlines, and scientific programming across global stem-cell networks.",
        "Curate concise scientific previews and post-event recaps to support cross-institutional engagement.",
      ],
    },
    {
      company: "GlaxoSmithKline (GSK)",
      location: "Collegeville, PA",
      position: "Research Associate Co-op",
      duration: "June 2024 - April 2025",
      bullets: [
        "Cross-validated transporter-mediated hepatic uptake assays in suspension and plateable hepatocytes to improve in vitro to in vivo translation.",
        "Executed MDCK-MDR1 and BCRP permeability/efflux assays and metabolic stability studies across preclinical and human hepatocyte systems.",
        "Contributed to high-throughput DMPK workflows on Tecan liquid handlers and customized Fluent Control scripts for study throughput.",
        "Performed microsomal binding and bioanalytical quantification using rapid equilibrium dialysis, BCA assays, and Spotfire-based data analysis.",
        "Documented studies in ELN, presented project updates, and trained new team members on assay rationale and automation workflows.",
      ],
    },
    {
      company: "Dr. Jace Jones Lab, University of Maryland School of Pharmacy",
      location: "Baltimore, MD",
      position: "Research Assistant",
      duration: "Oct 2023 - June 2024",
      bullets: [
        "Optimized oligonucleotide analysis workflows using MALDI-TOF, LC-MS, nanodrop, and buffer-exchange methods.",
        "Supported multi-step SPE for lipid isolation and oligonucleotide sample preparation.",
        "Compared HILIC and RPLC performance across ionization modes for lipidomic resolution and method selection.",
        "Processed MS and UPLC output in TraceFinder, Xcalibur, and Excel for quantitative lipidomic interpretation.",
      ],
    },
    {
      company: "Department of Occupational Health and Safety, Department of Defense",
      location: "New Delhi, India",
      position: "Research Intern",
      duration: "Aug 2022 - Oct 2022",
      bullets: [
        "Investigated radio-wave exposure effects on inflammatory, metabolic, and apoptosis-related molecular markers in Sprague Dawley rats.",
        "Performed tissue collection, homogenization, immunoblotting, and ELISA workflows for brain, blood, and skin analyses.",
        "Quantified oxidative stress biomarkers and metabolic enzymes across exposure groups using validated biochemical assays.",
        "Operated RF signal generation systems in anechoic chambers to maintain controlled exposure conditions.",
      ],
    },
    {
      company: "Department of Chemotherapy, The Haffkine Institute for Training, Research, and Testing",
      location: "Mumbai, India",
      position: "Research Intern",
      duration: "Jan 2022 - March 2022",
      bullets: [
        "Performed derivatization workflows for GC-MS and supported HPLC/GC-MS investigations for neonatal disease biomarkers.",
        "Contributed to development and validation of bioanalytical methods for zidovudine estimation.",
        "Used HPLC, GC-MS, and FTIR to evaluate drug-sample purity and processed outputs in Chromeleon CDS and Excel.",
      ],
    },
  ],
  publications: [
    {
      authors:
        "Vattipally VN, Kramer P, Troumouchi K, Shiino S, Abouelseoud N, Joshi K, Xu R, Theodore N, Brem H, Bettegowda C, Jantzie LL, Robinson S, Azad TD, Kathuria A",
      title:
        "Engineered neuroglial organoids as living neural interfaces for restorative neurosurgery.",
      journal: "Neurosurgical Focus",
      year: "2026",
      details: "60(2):E5",
      doi: "10.3171/2025.11.FOCUS25911",
      pmid: "41621105",
      url: "https://doi.org/10.3171/2025.11.FOCUS25911",
      status: "Published",
    },
    {
      authors:
        "Pantula A, Joshi K, Kathuria A",
      title:
        "Transforming brain organoids into functional platforms: convergence of engineering, imaging, and ethics.",
      journal: "Advanced Science",
      status: "Under Review",
    },
    {
      authors:
        "Ofria LDL, Sosnowski DW, Joshi K, Maher BS, Kathuria A",
      title:
        "Dual transcriptomic and epigenomic signatures of THC exposure in human prefrontal cortex development.",
      journal: "Genome Medicine",
      url: "https://europepmc.org/article/PPR/PPR1042207",
      status: "Preprint",
      details: "Under review; preprint available",
    },
    {
      authors:
        "Joshi K, Pantula A, Cheng K, Kathuria A",
      title:
        "Multi-region human brain organoids enable phenotypic screening for neurodegenerative therapies.",
      status: "In Preparation",
    },
    {
      authors:
        "Joshi K, Pantula A, Cheng K, Kathuria A",
      title:
        "Modeling alpha-synuclein pathology propagation from nasal epithelium to brain in Parkinson disease using human iPSC-derived multi-chamber microfluidic systems.",
      status: "In Preparation",
    },
    {
      authors:
        "Joshi K, Aravindhan K, Reilly M, Roethke T",
      title:
        "Quantifying uptake versus metabolism: mechanistic validation in plated and suspended hepatocytes across species.",
      status: "In Preparation",
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
