import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import SocialPalsSlider1 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-1.png";
import SocialPalsSlider2 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-2.png";
import SocialPalsSlider3 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-3.png";
import SocialPalsSlider4 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-4.png";
import SocialPalsSlider5 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-5.png";
import SocialPalsSlider6 from "../assets/images/screenshots/socialPalsSlider/socialPals-slider-6.png";

import kamboScreenshot1 from "../assets/images/screenshots/kambo/1.png";
import kamboScreenshot2 from "../assets/images/screenshots/kambo/2.png";
import kamboScreenshot3 from "../assets/images/screenshots/kambo/3.png";
import kamboScreenshot4 from "../assets/images/screenshots/kambo/4.png";
import kamboScreenshot5 from "../assets/images/screenshots/kambo/5.png";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../assets/images/hero.jpg";

import testimonialImage from "../images/testimonial.webp";
import KamboLogo from "../assets/images/projectsIcons/kambo-logo.png";
import partnersPortalLogo from "../assets/images/projectsIcons/partnersPortal.png";
import proPlanLogo from "../assets/images/projectsIcons/proplan-logo.png";
import celusLogo from "../assets/images/projectsIcons/celus-logo.webp";

import partnerPortalScreenshot1 from "../assets/images/screenshots/partnersPortal/1.png";
import partnerPortalScreenshot2 from "../assets/images/screenshots/partnersPortal/10.png";
import partnerPortalScreenshot3 from "../assets/images/screenshots/partnersPortal/3.png";
import partnerPortalScreenshot4 from "../assets/images/screenshots/partnersPortal/4.png";
import partnerPortalScreenshot5 from "../assets/images/screenshots/partnersPortal/5.png";

import socialPalsLogo from "../assets/images/projectsIcons/socialPals.png";

import fortyTwoLogo from "../assets/images/projectsIcons/forty-two-logo.png";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Mohamad Al Maleh - Portfolio",
  description: "Senior Frontend Developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohamad.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I&apos;m <strong className="text-stone-100">Mohamad Al Maleh</strong>,{" "}
        <strong className="text-stone-100">Senior Frontend Developer</strong>,
        currently Looking for a{" "}
        <strong className="text-stone-100">new Challenge, </strong> I help to
        build a modern, scalable, well architected, well tested and performant{" "}
        <strong className="text-stone-100">React</strong> and{" "}
        <strong className="text-stone-100">NextJS</strong> web application.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing{" "}
        <strong className="text-stone-100">Electric Guitar</strong>, or hitting
        the <strong className="text-stone-100">GYM</strong>, or{" "}
        <strong className="text-stone-100">Hiking</strong> around Munich.
      </p>
    </>
  ),
  actions: [
    {
      href: "https://drive.google.com/file/d/1Pwanf5_1qvNSx_GgI89IFA0RedGRSPTk/view?usp=drive_link",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc:
    "https://media.licdn.com/dms/image/C4E03AQGDlkkHWew9Qw/profile-displayphoto-shrink_800_800/0/1517436805965?e=1727913600&v=beta&t=plAc6TZ-_-GbN2EYhi3OPKCUdvKPaiyoDivmUZzM2bE",
  description: `I'm a Senior Frontend Developer with over 10 years of experience specializing in building and optimizing web applications. I excel at creating responsive, high-performance, and visually engaging user interfaces with a strong emphasis on writing clean, maintainable, and testable code. My expertise includes JavaScript and TypeScript, as well as frameworks like React.js and Next.js, along with HTML5, CSS3, and various other front-end tools and libraries. I am particularly skilled in testing and refactoring code to ensure robustness and efficiency. Passionate about delivering exceptional web experiences, I continuously advance my skills to stay at the forefront of industry trends and innovations.`,
  aboutItems: [
    { label: "Location", text: "Munich / Germany", Icon: MapIcon },
    { label: "Age", text: "36", Icon: CalendarIcon },
    { label: "Nationality", text: "Syrian", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Music, Cooking, Sports, Hiking",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Bachelor degree in Computer Engineering ",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "Looking for a Job",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 9,
      },
      {
        name: "Arabic",
        level: 10,
      },
      {
        name: "German",
        level: 1,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "TypeScript",
        level: 8,
      },
      {
        name: "Redux",
        level: 8,
      },
      {
        name: "Next.js",
        level: 7,
      },
      {
        name: "HTML5",
        level: 8,
      },
      {
        name: "CSS3",
        level: 8,
      },
      {
        name: "git",
        level: 8,
      },
      {
        name: "styled-components",
        level: 6,
      },
      {
        name: "Jest",
        level: 3,
      },
      {
        name: "Cypress",
        level: 3,
      },
      {
        name: "Ant Design",
        level: 6,
      },
      {
        name: "Jira",
        level: 3,
      },
      {
        name: "GitHub",
        level: 3,
      },
      {
        name: "Bitbucket",
        level: 3,
      },
      {
        name: "Jira",
        level: 3,
      },
      {
        name: "GitHub",
        level: 3,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "SocialPals",
    stackUsed: ["Angular", "RxJS", "SASS", "HTML", "Gitlab", "Asana", "Figma"],
    description:
      "  SocialPals is a digital marketing platform that enables brands to collaborate with local retailers and partners to create and distribute targeted, localized content for social media campaigns.",
    url: "https://reactresume.com",
    image: socialPalsLogo,
    longDescription:
      "SocialPals is a project that was designed to create an inclusive and supportive online community for people with intellectual and developmental disabilities. The platform aims to provide a safe space where users can connect, share experiences, and access resources tailored to their needs.",
    sliderImages: [
      SocialPalsSlider1,
      SocialPalsSlider2,
      SocialPalsSlider3,
      SocialPalsSlider4,
      SocialPalsSlider5,
      SocialPalsSlider6,
    ],
    keyFeatures: [
      {
        featureTitle: "Social Connection",
        featureDescription:
          "Offers tools and features to help users build and maintain friendships, engage in social activities, and participate in community events.",
      },
      {
        featureTitle: "Support Resources",
        featureDescription:
          "Provides access to resources such as educational materials, advocacy information, and support networks tailored to users' needs.",
      },
      {
        featureTitle: "User-Friendly Design",
        featureDescription:
          "Designed to be accessible and easy to navigate, with features that cater to different levels of cognitive and digital literacy.",
      },
      {
        featureTitle: "Privacy and Safety",
        featureDescription:
          "Ensures the safety and privacy of users with measures in place to protect personal information and foster a respectful online environment.",
      },
    ],
  },
  {
    title: "celus",
    description:
      "Project Celus is an AI-powered platform designed to automate and streamline the design process for electronic components and circuit boards, enhancing efficiency for engineers.",
    url: "AmboLogo",
    image: celusLogo,
    stackUsed: [
      "React.js",
      "Next.js",
      "Javascript",
      "TypeScript",
      "Redux",
      "Ant Design",
      "Jest",
      "Cypress",
      "SASS",
      "HTML",
      "Gitlab",
      "Jira",
      "Figma",
    ],
    longDescription:
      "Celus is an innovative platform aimed at automating the design and development of electronic circuits and printed circuit boards (PCBs). Celus is known for developing tools that help engineers streamline the design process by automating repetitive tasks and integrating design tools in a way that speeds up development time while reducing errors.",
    keyFeatures: [
      {
        featureTitle: "Automated Design",
        featureDescription:
          "Leverages AI to automate the design of electronic circuits and PCBs, reducing manual effort and minimizing errors.",
      },
      {
        featureTitle: "Integrated Tools",
        featureDescription:
          "Provides a suite of tools including component libraries, design templates, and automated testing, all integrated into a single platform for streamlined workflow.",
      },
      {
        featureTitle: "Optimized Workflow",
        featureDescription:
          "Enhances productivity by automating routine tasks, significantly reducing the time from concept to production.",
      },
      {
        featureTitle: "Flexibility and Customization",
        featureDescription:
          "Offers high customization options, allowing engineers to tailor the design process to specific project requirements.",
      },
    ],
    sliderVideos: [
      "https://www.youtube.com/embed/dtQqsxJ5Scs",
      "https://www.youtube.com/embed/fJVmTnEP2gY",
      "https://www.youtube.com/embed/S2jCWOIfkz4",
    ],
  },
  {
    title: "Kambo",
    description:
      "Project Kambo by GKFX is a proprietary risk management and analytics tool developed to enhance trading strategies and optimize decision-making processes for financial market participants.",
    url: "https://reactresume.com",

    stackUsed: [
      "React.js",
      "Redux",
      "Javascript",
      "SASS",
      "HTML",
      "Gitlab",
      "Jira",
      "Figma",
    ],
    image: KamboLogo,
    longDescription:
      "Kambo is a project in the cryptocurrency and blockchain space. It focuses on providing decentralized financial services, primarily through an infrastructure that supports lending, borrowing, and other DeFi (Decentralized Finance) activities.",
    keyFeatures: [
      {
        featureTitle: "DeFi Ecosystem",
        featureDescription:
          "Kambo is built on the principles of decentralized finance, enabling users to interact with financial services without the need for traditional banks or financial institutions.",
      },
      {
        featureTitle: "Lending and Borrowing",
        featureDescription:
          "Users can lend their assets to earn interest or borrow against their crypto holdings. This allows for greater liquidity and flexibility in managing one's assets.",
      },
      {
        featureTitle: "Security and Decentralization",
        featureDescription:
          "As with most DeFi projects, Kambo emphasizes the importance of security and decentralization. The platform is typically governed by smart contracts, which are autonomous and operate without centralized control.",
      },
      {
        featureTitle: "Community Governance",
        featureDescription:
          "Often, these platforms have some form of community governance, where token holders can vote on proposals that affect the direction of the project.",
      },
      {
        featureTitle: "Integration with Other DeFi Protocols",
        featureDescription:
          "Kambo may also integrate with other DeFi protocols and services to enhance its offerings, providing users with a more comprehensive DeFi experience.",
      },
    ],
    sliderImages: [
      kamboScreenshot1,
      kamboScreenshot2,
      kamboScreenshot3,
      kamboScreenshot4,
      kamboScreenshot5,
    ],
  },
  {
    title: "Partners Portal",
    stackUsed: [
      "Angular",
      "Javascript",
      "SASS",
      "HTML",
      "Gitlab",
      "jira",
      "Webpack",
      "Jasmine",
      "Chai",
      "Ziplin",
    ],
    description:
      "The Partners Portal by GKFX is an online platform that allows affiliates and introducing brokers to track referrals, manage commissions, and access marketing tools to support their partnership with the GKFX financial services company.",
    url: "https://reactresume.com",
    image: partnersPortalLogo,
    longDescription:
      "The Partners Portal by GKFX (also known as GKFX Prime) is a platform aimed at providing support and resources for affiliates and introducing brokers (IBs) who partner with GKFX Prime. GKFX Prime is a global online brokerage that offers trading services across various financial instruments, including forex, commodities, indices, and cryptocurrencies.",
    keyFeatures: [
      {
        featureTitle: "Affiliate and IB Programs",
        featureDescription:
          "The Partners Portal supports individuals and businesses in earning commissions by referring clients to GKFX Prime. Various compensation models like CPA, revenue share, and hybrid models are available based on performance.",
      },
      {
        featureTitle: "Tracking and Reporting",
        featureDescription:
          "Partners have access to detailed tracking and reporting tools that allow them to monitor their performance, track referrals, and view earnings in real-time through comprehensive dashboards.",
      },
      {
        featureTitle: "Marketing Resources",
        featureDescription:
          "The portal provides marketing materials such as banners, landing pages, and email templates to help partners effectively promote GKFX Prime’s services. Localized content and multi-language support are also available.",
      },
      {
        featureTitle: "Support and Communication",
        featureDescription:
          "Dedicated communication channels are provided for partners to contact GKFX Prime’s support team, including account managers who assist with onboarding, strategy, and resolving issues.",
      },
      {
        featureTitle: "Payment and Commission Management",
        featureDescription:
          "Partners can manage their commissions and payments through the portal, including viewing payment history, setting up payment methods, and requesting withdrawals.",
      },
      {
        featureTitle: "Partner Levels and Rewards",
        featureDescription:
          "The program may include tiered partner levels, allowing partners to earn higher commissions or rewards based on their performance. The portal tracks progress toward these levels and provides insights on achieving them.",
      },
    ],
    sliderImages: [
      partnerPortalScreenshot1,
      partnerPortalScreenshot2,
      partnerPortalScreenshot3,
      partnerPortalScreenshot4,
      partnerPortalScreenshot5,
    ],
  },
  {
    title: "FortyTwo",
    stackUsed: [
      "Angular",
      "Javascript",
      "SASS",
      "HTML",
      "Gitlab",
      "jira",
      "Webpack",
      "Jasmine",
      "Chai",
      "Ziplin",
    ],
    description:
      "The FortyTwo project by GKFX is an advanced trading platform designed to provide sophisticated financial analysis, trading tools, and market insights for professional traders.",
    url: "https://reactresume.com",
    image: fortyTwoLogo,
    sliderVideos: ["https://www.youtube.com/embed/nNl5PZk8ykc"],
    longDescription:
      "Project FortyTwo by GKFX is a comprehensive risk management and automation tool used within the organization. The project is divided into several modules, including Daily PnL, Trading, Trade Blotter, Client Profiles, Treasury Management, and Historical Data Analysis. It supports separate risk management functionalities for AKFX and GKFX with specialized tools for managing various financial activities like Daily PnL (Profit and Loss), managing balance sheets, historical data monitoring, and treasury operations​ ",
  },
];

export const education: TimelineItem[] = [
  {
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: [],
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: [],
  },
];

export const experience: TimelineItem[] = [
  {
    date: "Dec. 2023 – Jun 2024",
    location: "SocialPals",

    title: "Senior Frontend Developer (remote)",
    content: [
      "Played a role in rebuilding a social media ads management system. The stack I used is Angular 17, Typescript, RxJS, Scss, HTML, and project management tools like Asana and Gitlab.",
      " Ensured code quality through regular reviews, refactors, and effective use of tools like Sentry, and OneSky.",
      "Discussed and Implemented new designs pixel-by-pixel using tools like Sketch and Miro.",
      "Gave insights and pieces of advice to ensure a smooth transition through the rebuilding of the application.",
    ],
  },
  {
    date: "Aug. 2021 – Sep 2023",
    location: "CELUS",
    title: "Frontend Developer",
    content: [
      "Played a pivotal role in building an AI-powered design platform for electronic engineers, optimizing workflows, and delivering a comprehensive component database.",
      "Proficiently utilized React.js, TypeScript, Redux, Next.js, Ant Design, Jest, Cypress, and styled-components to craft an engaging web application.",
      "Collaborated closely with the product team to implement a pixel-perfect design to deliver a seamless user experience within an agile environment.",
      "Demonstrated a commitment to code quality achieving 90% test coverage, consistently delivering clean, tested, and strongly typed code.",
      "Initiated improvements in the frontend engineering hiring process, and played a key role in recruitment.",
      "Contributed to code reviews, ensuring the highest coding standards were maintained.",
      "Influenced project architecture, identifying and addressing weaknesses while streamlining development, resulting in a 60% reduction in code volume.",
      "Built a robust component library system used by all projects and developers across the company, enhancing consistency and efficiency in development processes.",
    ],
  },
  {
    date: "2018 – Jul 2021",
    location: "GK Tech Fab",
    title: "Senior Frontend Developer",
    content: [
      "Initiated and maintained over 10 diverse projects, including a cryptocurrency exchange and loan projects and a high-impact mobile application with a user base exceeding one million.",
      "Utilized React.js, React Native, Redux, Ant Design, and SCSS to deliver exceptional results.",
      "Played a dual role in designing interfaces and optimizing user experiences, while maintaining direct and effective communication with stakeholders to transform their ideas into reality.",
    ],
  },
  {
    date: "Sep 2017 – Jan 2018",
    location: "ProPlan",
    title: "Full Stack Developer",
    content: [
      "Led the development of a third-party construction web application as the first developer.",
      "Utilized JavaScript, React.js, Redux, SCSS, Express.js, Node.js, MySQL, and AWS web services.",
      "Engaged in direct communication with stakeholders to understand their requirements and ideas.",
      "Took charge of both backend and frontend initiation, establishing the entire development workflow, from configuring Jira for project management to creating repositories and pipelines on Bitbucket, ensuring an efficient and streamlined development process.",
    ],
  },
  {
    date: "Jul 2015 – Aug 2017",
    location: "GK FX",
    title: "Mid Senior Frontend Developer",
    content: [
      "Worked with an English-based company specializing in alternative finance, where I played a pivotal role in the development and maintenance of a Forex Contract Lifecycle Management Application (CLM).",
      "Utilized a tech stack comprising JavaScript, AngularJS, Sass, Webpack, Jasmine, and Mocha for testing in an agile environment.",
      "Introduced and implemented unit and end-to-end testing to enhance application quality.",
      "Refactored the entire application to enhance modularity and testability, optimizing its overall performance and maintainability.",
    ],
  },
  {
    date: "Dec 2012 – Jul 2015",
    location: "FIMM",
    title: "Junior full-stack developer",
    content: [
      "Developed and maintained a social media application, handling both frontend and backend aspects.",
      "Utilized a diverse tech stack, including jQuery, AngularJS, CSS, PHP, Laravel, MySQL, and RabbitMQ.",
      "Transitioned from web MVC to API-driven architecture to improve application performance.",
      "Rebuilt the application using AngularJS, taking over the frontend part of it.",
    ],
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Julia Semenova - Project Manager",
      text: "Working with Mohamad at Celus was a game-changer for our front-end development. His deep expertise in React and modern JavaScript frameworks transformed our user interface, making it faster, more responsive, and incredibly intuitive. His attention to detail and ability to anticipate user needs played a significant role in elevating our product. Mohamad is not just a developer but a true problem-solver who consistently delivers high-quality code and innovative solutions.",
      image:
        "https://media.licdn.com/dms/image/D4D03AQGjA97h08ZSmQ/profile-displayphoto-shrink_800_800/0/1708461344781?e=1727913600&v=beta&t=mUBIZKmSfSA_vzoFnmDlDUw4fWDmS7ZjQozFrV104JQ",
    },
    {
      name: "Sebastian Mezzavilla - STO",
      text: "During his time at Social Pals, Mohamad made valuable contributions to our front-end development efforts. While his tenure with us was brief, he showed a solid understanding of React and modern development practices. Mohamad was proactive in learning our codebase and contributed to key components of our project. Though we didn’t work together for long, he demonstrated potential and a willingness to grow, which I’m sure will benefit his future endeavors",
      image:
        "https://media.licdn.com/dms/image/C4D03AQFwDuc8C9_oPA/profile-displayphoto-shrink_800_800/0/1544291029152?e=1727913600&v=beta&t=MaUQr26IsDdQwfelYAiCbcJ_wgZl8lNpE_kVt0M9YGE",
    },
    {
      name: "Can Guler - Project Manager",
      text: "Mohamad was instrumental in the success of our frontend projects at GKFX. His strong command of React and front-end best practices helped us deliver a highly polished trading platform. He is a team player who communicates effectively and is always willing to go the extra mile to ensure the project's success. His ability to quickly adapt to new challenges and consistently deliver high-quality work makes him an asset to any development team.",
      image:
        "https://media.licdn.com/dms/image/C4D03AQFF6BCE-J_JXA/profile-displayphoto-shrink_800_800/0/1657107066092?e=1727913600&v=beta&t=9MLtDZfZOY7PFZA0-SlsnP0z0L_JssWBKrbXBPDYmvI",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "You can reach me via email or at the phone number listed on my resume.",
  items: [
    {
      type: ContactType.Email,
      text: "mohammad.maleh@gmail.com",
      href: "mailto:mohammad.maleh@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Munich / Germany",
      href: "https://maps.app.goo.gl/S6E66mSimCBQPZWF8",
    },
    {
      type: ContactType.Github,
      text: "mohammadmaleh",
      href: "https://github.com/mohammadmaleh",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/mohammadmaleh",
  },

  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/mohammad-maleh/",
  },
];
