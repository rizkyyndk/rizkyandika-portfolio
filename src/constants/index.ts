import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "Frontend Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: typescript,
  },
  {
    name: "C++",
    icon: threejs,
  },
  {
    name: "K-System",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: redux,
  },
  {
    name: "Apache Superset",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "My SQL",
    icon: tailwind,
  },
  {
    name: "Postgre SQL",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Programmer Junior",
    companyName: "Nusantara Sakti Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using Ksystem and other related technologies.",
      "Create dashboard reports using apache superset",
    ],
  },
  {
    title: "Junior Programmer",
    companyName: "PT Probindo Artika Jaya",
    icon: starbucks,
    iconBg: "#E6DEDD", 
    date: "December 2022 - December 2023",
    points: [
      "Build a program code using the PHP Laravel framework.",
      "Manage the database system.",
      "Perform application maintenance from Microsoft SQL Server database.",
      "Perform application testing.",
      "Carrying out application development in UI and Data sessions.", 
      "Create report documentation on applications that have been completed.",
    ],
  },
  {
    title: "Robotics Laboratory Assistant ",
    companyName: "Gunadarma University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2023",
    points: [
      "Teaching students about understanding robotics.",
      "Helping students research and test robotics.",
      "Teaching students in making robotics.",
      "Carry out maintenance and development of robotics.",
    ],
  },
  {
    title: "Building Robotics Systems",
    companyName: "Gunadarma University",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2023",
    points: [
      "Create an IoT-based money storage safe system.",
      "Create an IoT-based automatic plant watering system.",
      "Create an IoT-based LPG gas leak and fire prevention system.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "Travel Management System",
    description:
      "A web-based platform that allows users to application and realization of official travel at PT. Create Kridatama. Each application will be reviewed in stages, according to the applicable organizational structure and work unit.",
    tags: [
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    // sourceCodeLink: "https://github.com/",
  },
  {
    name: "Company Profile PT. Republic of Solutions",
    description:
      "A web application that allows users to Presents a general overview of the company's business Clients or customers can find out what products or services our business offers. Corporate media to convey brand stories to people.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // sourceCodeLink: "https://github.com/",
  },
  {
    name: "Nusantara Sakti",
    description:
      "Web application that focuses on financing services and sales of Honda motorbikes and multipurpose products. In this application, users can buy motorbikes on credit or cash, access financing services with BPKB guarantees, and take advantage of the referral program through the KlikNSC application.",
    tags: [
      {
        name: "K-System",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    // sourceCodeLink: "https://github.com/",
  },
];
// export { services, technologies, experiences, projects };

export { services, technologies, experiences, testimonials, projects };
