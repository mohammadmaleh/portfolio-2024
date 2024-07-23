import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
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
  title: "React Resume Template",
  description: "Example site built with Tim Baker's react resume template",
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
  name: `I'm Tim Baker.`,
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
      href: "/assets/resume.pdf",
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
  profileImageSrc: profilepic,
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
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage4,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage5,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://reactresume.com",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
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
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
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
