import {
  java,
  mobile,
  backend,
  creator,
  reactjs,
  mongodb,
  git,
  chatanalysis,//added
  smartschool,//added
  immigration,//added
  ecommerce,//added
  facebook,//added
  instagram,//added
  telegram,//added
  twitter,//added
  zeeshan,//added
  aman,//added
  abdulla,
  snapfluence,
  ssms,
  aspnet,
  springboot,
  tailwind,
  saif,



} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  
  {
    name: "asp.net framework",
    icon: aspnet,
  },
  {
    name: "springboot framework",
    icon: springboot,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL Server Management Studio Redux Toolkit",
    icon: ssms,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Back-end Developer",
    company_name: "SnapFluence Technologies",
    icon: snapfluence,
    iconBg: "#383E57",
    date: "Dec 2023 - July 2024",
    points: [
      "Developing and maintaining web applications using C# asp .net framework and other related technologies.",
      "Collaborating with cross-functional teams including DevOps developer, designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a back-end developer who truly cares about their clients' success like Rayyan does.",
    name: "Zeeshan Naglekar",
    designation: "CEO",
    company: "SnapFluence Technologies",
    image: zeeshan,
  },
  {
    testimonial:
      "I thought creating a backend as robust and efficient as ours was impossible, but Rayyan proved us wrong.",
    name: "Aman Khan Pathan",
    designation: "Software Engineer",
    company: "TheEcoComp",
    image: aman,
  },
  
  {
    testimonial:
      "Rayyan's backend optimization boosted our traffic by 50%. We are truly grateful for their expertise.",
    name: "Saif Sayyed",
    designation: "Associate Engineer",
    company: "SnapFluence Technolgies",
    image: saif,
  },
  {
    testimonial:
      "Rayyan Ansari excels in backend development, delivering robust and scalable solutions that enhance application performance and reliability.",
    name: "Abdulla Shaikh",
    designation: "Software Engineer",
    company: "TheEcoComp",
    image: abdulla,
  },
];

const projects = [
  {
    name: "E-Mart ",
    description:
      "Discover a world of convenience with our Android ecommerce app, where shopping is made easy with a vast selection of products at your fingertips. Browse effortlessly, enjoy secure payments, and receive timely updates on your orders. Experience seamless navigation and personalized recommendations, all in one app.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/iamrayyanansari/E_Mart-Android.git",
  },
  {
    name: "Chat analysis ",
    description:
      "The 'WhatsApp Chat Analyser' is an intuitive tool for extracting valuable insights from your WhatsApp chats. Visualize message trends, user activity, and common words, enhancing your understanding of communication patterns. Effortlessly explore and analyze your conversations to uncover meaningful trends and patterns.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "WordCloud",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
    ],
    image: chatanalysis,
    source_code_link: "https://github.com/iamrayyanansari/chat_analysis.git",
  },
  {
    name: "SmartSchool",
    description:
      "SmartSchool is a web application revolutionizing school management with features like attendance tracking, grade management, and parent-teacher communication. It simplifies administrative tasks, fosters better communication, and enhances collaboration among stakeholders. SmartSchool is the ultimate tool for modern schools seeking efficiency and excellence in education management.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "ssms",
        color: "orange-text-gradient",
      },
      {
        name:"Entity Framework",
        color:"blue-text-gradient",
      },
    ],
    image: smartschool,
    source_code_link: "https://github.com/iamrayyanansari/SmartSchool-API.git",
  }, 
   {
    name: "Immigration",
    description:
      "Immigration is the dynamic journey of individuals relocating to a new country, seeking new opportunities, reuniting with family, or finding refuge. It's a transformative experience that shapes societies, cultures, and economies, enriching the fabric of nations.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "ssms",
        color: "orange-text-gradient",
      },
      {
        name:"Entity Framework",
        color:"blue-text-gradient",
      },
    ],
    image: immigration,
    source_code_link: "https://github.com/SnapSatish/Immigrate.git",
  },
];

const socials = [
  
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/RayyanANSA34891?t=vVU5hSPEMxblVyZcUNoi1A&s=09",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/s.r.ansariii?igsh=OGQ5ZDc2ODk2ZA==",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "t.me/iamrayyanansari",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/ansari.rayyan.9",
  },
];
export { services, technologies, experiences, testimonials, projects ,socials };
