import { AiFillExperiment } from "react-icons/ai";
import {
  FaAtom,
  FaBalanceScale,
  FaBarcode,
  FaChartBar,
  FaChartLine,
  FaCube,
  FaFlask,
  FaLinkedin,
  FaNewspaper,
  FaProjectDiagram,
  FaSearch,
  FaVials,
  FaWaveSquare,
} from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { TbCell, TbMicroscope } from "react-icons/tb";
import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "blue";

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
    "Incoming PhD student in Mechanical Engineering (Regenerative Medicine and Mechanobiology) at The University of Texas at Austin, starting August 2026.",
    "Completed an M.S. in Pharmaceutical Sciences at the University of Maryland School of Pharmacy.",
    "Experienced across discovery DMPK, organoid disease modeling, and translational preclinical assay development.",
    "Contributor to multi-institution collaborations spanning academia, industry, and U.S. government research groups.",
    "Active in peer review and scientific mentoring through Elsevier, ISSCR, and Johns Hopkins research communities.",
    "Proficient in stem cell culture, organoid engineering, transcriptomics prep, electrophysiology, and advanced bioanalytics.",
  ],
  subtitle: "Bridging Bone Biology and Neuroscience",
  tagline:
    "Pursuing musculoskeletal tissue engineering through 3D biomanufacturing and mechanobiology, with research interests in bone biology, aging biology, and bone cancers as an incoming PhD student at UT Austin.",
  bigHeading: {
    black: "Engineering",
    blue: "Bone & Aging Biology",
  },
  about:
    "My name is Kaustubh Joshi, and I am a PhD student in the Department of Mechanical Engineering at The University of Texas at Austin under Maryam Tilton. I completed a Master of Science (MS) in Pharmaceutical Sciences from the University of Maryland, Baltimore. My work sits at the intersection of living model engineering and translational drug development, where I turn complex biological questions into reproducible experimental systems for discovery and decision-making. I bring research experience from Johns Hopkins Medicine, GlaxoSmithKline, and the University of Maryland School of Pharmacy, and I maintain a list of my publications.",
  location: "Baltimore, MD",
  image: "/assets/kaustubh-joshi.jpg",
  education: [
    {
      degree: "Doctor of Philosophy (Ph.D)",
      major: "Mechanical Engineering (Regenerative Medicine and Mechanobiology)",
      school: "The University of Texas at Austin",
      graduation: "Starting Aug 2026",
      awards: [
        "Awarded the highly competitive Cockrell Graduate Fellowship.",
        "Invited to Sigma Xi, The Scientific Research Honor Society, as an Associate Member.",
      ],
    },
    {
      degree: "Master of Science (MS)",
      major: "Pharmaceutical Sciences",
      school: "University of Maryland, Baltimore",
      graduation: "July 2023 - May 2025",
    },
    {
      degree: "Bachelor of Pharmacy (B. Pharm)",
      major: "Pharmaceutical Sciences",
      school: "D Y Patil University, India",
      graduation: "June 2019 - June 2023",
    },
  ],
  experience: [
    {
      company: "Biomedical Engineering and Neurosurgery, Johns Hopkins Medicine",
      location: "Baltimore, MD",
      position: "Research Technologist",
      duration: "April 2025 - Present",
      bullets: [
        "Recognized as a Johns Hopkins Translational Tissue Engineering Rising Star (2025).",
        "Established and managed a biobank of 30+ patient-derived iPSC lines, optimizing media, inhibitor, and matrix conditions to improve pluripotency maintenance, viability, and differentiation consistency.",
        "Engineered region-specific and multi-region organoid/assembloid platforms (cerebral, retinal, brainstem, olfactory placode, spinal, and endothelial systems) and developed DIPG co-culture assays for translational disease modeling.",
        "Integrated preclinical screening workflows spanning live-cell imaging, multielectrode-array functional readouts, cell-toxicity studies, and scRNA-seq/bulk RNA-seq sample preparation for cross-functional academic, industry, and U.S. Department of Defense collaborations.",
      ],
    },
    {
      company: "Discovery DMPK In Vitro, GlaxoSmithKline (GSK)",
      location: "Collegeville, PA",
      position: "Research Associate Co-op",
      duration: "June 2024 - April 2025",
      bullets: [
        "Built and cross-validated transporter-mediated hepatic uptake assays in suspension and plateable hepatocytes, generating uptake-clearance datasets that strengthened in vitro to in vivo translation confidence.",
        "Executed MDCK-MDR1 and BCRP permeability/efflux studies with matched hepatocyte metabolic-stability assays to separate transporter-driven effects from metabolic liabilities across discovery compounds.",
        "Scaled high-throughput Discovery DMPK workflows on Tecan Fluent platforms by developing and troubleshooting Fluent Control scripts, improving assay throughput and run-to-run consistency.",
        "Performed microsomal binding and rapid equilibrium dialysis workflows, then delivered decision-ready analyses in Spotfire and ELN for cross-functional project updates.",
      ],
    },
    {
      company: "Dr. Jace Jones Lab, University of Maryland School of Pharmacy",
      location: "Baltimore, MD",
      position: "Research Assistant",
      duration: "Oct 2023 - June 2024",
      bullets: [
        "Developed MALDI-TOF and LC-MS workflows for therapeutic oligonucleotide characterization, including impurity/degradation profiling and sample cleanup optimization.",
        "Built multi-step prep pipelines for lipidomics and oligonucleotide analyses, combining protein precipitation, SPE cleanup, and buffer-exchange strategies for reproducible recovery.",
        "Benchmarked HILIC, RPLC, ion-pair reverse-phase (IPRP), and metal-ion complexation chromatography (MICC) conditions to improve separation of structurally similar analytes.",
        "Established quantitative processing and QA workflows in TraceFinder, Xcalibur, and Excel for peak integration, batch-level comparisons, and report-ready UPLC-MS interpretation.",
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
      url: "https://www.biorxiv.org/content/10.64898/2026.01.08.698442v1",
      status: "Preprint",
      details: "Under review; preprint available",
    },
    {
      authors:
        "Pantula A, Joshi K, Kathuria A",
      title:
        "Multi-region human brain organoids enable phenotypic screening for neurodegenerative therapies",
      status: "In Preparation",
    },
    {
      authors:
        "Joshi K, Pantula A, Kathuria A",
      title:
        "Comprehensive characterization of human iPSC-derived olfactory organoids reveals transcriptomic and functional maturity for neurodegenerative disease modeling",
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
      icon: TbCell,
    },
    {
      name: "Assay Development",
      icon: FaVials,
    },
    {
      name: "High Throughput Screening",
      icon: FaProjectDiagram,
    },
    {
      name: "ADME Assays",
      icon: FaBalanceScale,
    },
    {
      name: "ELISA",
      icon: FaFlask,
    },
    {
      name: "LC-MS",
      icon: FaWaveSquare,
    },
    {
      name: "LNP Synthesis",
      icon: FaAtom,
    },
    {
      name: "In-Vitro Studies",
      icon: MdScience,
    },
    {
      name: "In-Vivo Studies",
      icon: AiFillExperiment,
    },
    {
      name: "Immunohistochemistry",
      icon: TbMicroscope,
    },
    {
      name: "Western Blotting",
      icon: FaBarcode,
    },
    {
      name: "TIBCO Spotfire",
      icon: FaChartLine,
    },
    {
      name: "PyMOL",
      icon: FaCube,
    },
    {
      name: "Xcalibur",
      icon: FaWaveSquare,
    },
    {
      name: "ADMET Predictor",
      icon: FaBalanceScale,
    },
    {
      name: "GraphPad Prism",
      icon: FaChartBar,
    },
    {
      name: "TraceFinder",
      icon: FaSearch,
    },
  ],
  social: [
    {
      name: "Google Scholar",
      icon: SiGooglescholar,
      uri: "https://scholar.google.com/citations?hl=en&user=S_cVEdwAAAAJ",
      hover: {
        bg: ["blue.500", "blue.300"],
        color: "white",
      },
    },
    {
      name: "ResearchGate",
      icon: SiResearchgate,
      uri: "https://www.researchgate.net/profile/Kaustubh-Joshi-12",
      hover: {
        bg: ["cyan.500", "cyan.300"],
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
    {
      name: "Curriculum Vitae",
      icon: FaNewspaper,
      uri: "",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "kaustubhjoshi@umaryland.edu",
  },
} as IMe;
