/* Personal Portfolio Configuration for Ansh Tomar */

// Website related settings
const settings = {
  isSplash: false, // Splash screen disabled for fast, clean initial loading
};

// SEO Related settings
const seo = {
  title: "Ansh Tomar | Software Developer & AI Engineer",
  description:
    "Portfolio of Ansh Tomar - Software Developer & AI Engineer skilled in Full Stack Development (React, Next.js, Node.js), RAG Pipelines, LangChain, and Android Mobile Development.",
  og: {
    title: "Ansh Tomar Portfolio",
    type: "website",
    url: "https://anshtomar-18.github.io/",
  },
};

// Home Page Greeting
const greeting = {
  title: "Ansh Tomar",
  logo_name: "AnshTomar",
  nickname: "Ansh",
  subTitle:
    "Software Development Intern at IIT (BHU) & B.Tech student at MAIT. Passionate about building intelligent AI systems (RAG pipelines, LLMs), scalable full-stack web apps, and native Android applications.",
  resumeLink: "/Ansh_Tomar_Resume.pdf",
  portfolio_repository: "https://github.com/anshtomar-18/portfolio-ansh-tomar",
  githubProfile: "https://github.com/anshtomar-18",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/anshtomar-18",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anshtomar182005",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:Anshtomar200418@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI & Data Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing Retrieval-Augmented Generation (RAG) pipelines using LangChain, Groq LLMs, and Hugging Face embeddings",
        "⚡ Vector databases integration with PostgreSQL (pgvector) and Pinecone for semantic search & knowledge retrieval",
        "⚡ LLM API integration, prompt engineering, and conversational AI assistant development",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009638",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building high-performance modern web applications using Next.js 14, React.js, and TypeScript",
        "⚡ Crafting responsive, accessible UI with Tailwind CSS, styled-components, and modern styling libraries",
        "⚡ Designing scalable microservices and backend REST & GraphQL APIs with Node.js and Express",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
      ],
    },
    {
      title: "Android & Mobile App Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing high-performance native Android apps using Kotlin, Jetpack Compose, and Material 3",
        "⚡ Implementing clean MVVM architecture, Kotlin Coroutines, StateFlow, Retrofit 2 networking, and REST APIs",
        "⚡ Strong computer science fundamentals in Data Structures & Algorithms (DSA), System Design, and OOP",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#E76F00",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/anshtomar-18",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/anshtomar182005",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Maharaja Agrasen Institute of Technology (MAIT)",
      subtitle: "B.Tech — Information Technology & Engineering",
      logo_path: "mait_logo.png",
      alt_name: "MAIT",
      duration: "2024 - 2028",
      descriptions: [
        "⚡ Maintaining a strong academic record with an 8.0 CGPA.",
        "⚡ Studied core CS fundamentals: Data Structures & Algorithms (DSA), System Design, DBMS, OOP, and Operating Systems.",
        "⚡ Active participant in collegiate hackathons, technical projects, and competitive programming.",
      ],
      website_link: "https://mait.ac.in/",
    },
    {
      title: "St. Teresa Vidya Deep Sr. Sec. School",
      subtitle: "Class XII — CBSE",
      logo_path: "st_teresa_logo.png",
      alt_name: "St. Teresa",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Completed Senior Secondary Education under CBSE board with 85% aggregate.",
        "⚡ Built a solid foundation in Physics, Chemistry, and Mathematics.",
      ],
      website_link: "http://stteresavidyadeep.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Smart India Hackathon 2026",
      subtitle: "Finalist & Cleared College Round 2025",
      logo_path: "sih_logo.jpg",
      certificate_link: "#",
      alt_name: "Smart India Hackathon",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Analytics Virtual Experience",
      subtitle: "Deloitte Certified",
      logo_path: "deloitte_logo.png",
      certificate_link: "#",
      alt_name: "Deloitte",
      color_code: "#FFFFFF",
    },
    {
      title: "Generative AI",
      subtitle: "Microsoft & LinkedIn Certified",
      logo_path: "microsoft_logo.png",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#00A4EF99",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Leadership",
  description:
    "Hands-on experience developing production-ready AI applications, RAG pipelines, microservices, and telecom integration solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships & Work",
      work: true,
      experiences: [
        {
          title: "Software Development Intern",
          company: "IIT (BHU), Varanasi — MOSIP Nexus AI",
          company_url: "https://www.iitbhu.ac.in/",
          logo_path: "iit_bhu_logo.png",
          duration: "June 2026 - August 2026",
          location: "Varanasi, Uttar Pradesh, India",
          description:
            "Worked as a Software Development Intern on MOSIP Nexus AI at IIT (BHU), contributing to an AI-powered knowledge assistant for the MOSIP platform. Worked on RAG-based knowledge retrieval, integrating MOSIP documentation and Confluence resources, and improving information retrieval using LangChain, Groq LLMs, HuggingFace embeddings, and PostgreSQL with pgvector. Collaborated through Git and GitHub in an agile development environment.\n\nKey Highlights & Contributions:\n⚡ 1. AI-Powered Knowledge Assistant: Worked on MOSIP Nexus AI, a knowledge assistant designed to help developers retrieve information from multiple MOSIP technical resources using natural language.\n⚡ 2. RAG Pipeline Development: Worked with Retrieval-Augmented Generation (RAG) components to improve knowledge retrieval and provide context-grounded answers.\n⚡ 3. Knowledge Source Integration: Contributed to integrating MOSIP documentation, MOSIP website content, and MOSIP Support Desk (MSD) Confluence spaces.\n⚡ 4. Vector Database: Worked with PostgreSQL and pgvector for storing and retrieving vector embeddings.\n⚡ 5. LLM Integration: Worked with LangChain, Groq Llama 3.3-70B, and HuggingFace multilingual embeddings.\n⚡ 6. Backend and Retrieval: Contributed to Python-based retrieval logic, configuration updates, and knowledge-source integration.\n⚡ 7. Developer Collaboration: Worked with Git, GitHub, feature branches, and pull requests in an agile, collaborative development environment.",
          color: "#701A28",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of real-world applications across AI systems, full-stack Next.js platforms, telecom USSD services, and native Android development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Achievements & Highlights",
  description: "Recognitions and hackathon milestones achieved during my academic and technical journey.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "sih-2026",
      name: "Smart India Hackathon Finalist",
      createdAt: "2026-01-01T00:00:00Z",
      description: "Selected as Finalist for Smart India Hackathon 2026 after clearing university rounds in 2025.",
      url: "https://www.sih.gov.in/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am always open to discussing new software development opportunities, AI/RAG integrations, full-stack engineering roles, or innovative projects.",
  },
  blogSection: {
    title: "Connect",
    subtitle:
      "Find me on GitHub, LinkedIn, or reach out directly via email.",
    link: "https://www.linkedin.com/in/anshtomar182005",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Delhi, India",
    locality: "Delhi",
    country: "India",
    region: "Delhi",
    postalCode: "110001",
    streetAddress: "Delhi",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Delhi,India",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 8433168225",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
