import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
  } from "../assets";
  
  import usda from "../assets/usda.jpg"
  import wnyaa from "../assets/wnyaa.jpeg"
  import wsu_vcea from "../assets/company/wsu_vcea.jpeg"
  import nsbe from "../assets/company/nsbe.png"
  import travelbuddy from "../assets/travelbuddy.jpg"
  import spreadsheet from "../assets/spreadsheet.jpg"
  import python from "../assets/tech/python.jpeg"
  import c from "../assets/tech/c.png"
  import crimsoncode from "../assets/hackathon.png"
  import bsu from "../assets/bsu.jpg"
  import intramurals from "../assets/intermurals.png"
  import nsbegroup from "../assets/nsbegroup.jpg"
  import portfolio from "../assets/portpic.png"
  import rstudio from "../assets/rstudio.png"
  import azure from "../assets/tech/azure.jpg"  
  import hackronomics from "../assets/Hackanomics_logo.png"
  import javagame from "../assets/javagame.png"
  import hackdash from "../assets/hackdashboard.png"
  import sel from "../assets/sel.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "extracurriculars",
      title: "Extracurriculars",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "c++",
      icon: c,
    },
    {
      name: "azure",
      icon: azure,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senator",
      company_name: "National Society of Black Engineers WSU",
      icon: nsbe,
      iconBg: "#ffffff",
      date: "August 2023 - May 2025",
      points: [
        "Representing the interests of the National Society of Black Engineers (NSBE) chapter as Senator, collaborating with leadership and members to support organizational goals.",
        "Working with diverse teams to plan and execute events, such as industry mixers and professional development workshops, fostering connections between students and industry professionals",
        "Advocating for member concerns, ensuring their voices are heard in chapter decisions and promoting an inclusive and supportive environment.",
        "Contributing to the growth of the chapter by strategizing initiatives to increase engagement and participation among members.",
      ],
    },
    {
      title: "Technical Researcher",
      company_name: "USDA",
      icon: usda,
      iconBg: "#ffffff",
      date: "April 2024 - Present",
      points: [
        "Collaborated with interdisciplinary teams to analyze field experiment datasets and automate data processing workflows using Python and R.",
        "Developing reusable tools and packages to streamline repetitive tasks, ensuring reliability and improving overall project workflows.",
        "Contributing to team efforts by sharing technical expertise, fostering innovation, and maintaining clear communication across diverse project teams.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Undergrad Teaching Assistant",
      company_name: "WSU College of Engineering & Computer Science",
      icon: wsu_vcea,
      iconBg: "#9E1B32",
      date: "August 2024 - January 2025",
      points: [
        "Assist in leading lab sessions, guiding students through complex data structure concepts and implementations.",
        "Provide one-on-one and group tutoring to help students understand key topics",
        "Grade assignments and exams, offering constructive feedback to help students improve their coding practices",
        "Collaborate with the course instructor to ensure a seamless and effective learning experience for all students.",
      ],
    },
    {
      title: "Near-Peer Mentor",
      company_name: "Why Not You Academy",
      icon: wnyaa,
      iconBg: "#ffffff",
      date: "September 2024 - present",
      points: [
        "Mentoring high school students interested in computer science, providing guidance and support through their academic journey.",
        "Assisting students with understanding key computing concepts and encouraging their interest in STEM fields.",
        "Developing a supportive learning environment through one-on-one and group interactions, helping students build confidence and skills for future success",
        
      ],
    },
    {
      title: "President",
      company_name: "National Society of Black Engineers WSU",
      icon: nsbe,
      iconBg: "#ffffff",
      date: "May 2025 - present",
      points: [
        "Preside over all general body meetings and executive board meetings.",
        "Set the strategic vision for the organization and ensure alignment with NSBE national and regional goals.",
        "Support and guide executive board members in their roles.",
        "Represent the chapter to university officials, industry professionals, and other student organizations.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "SEL",
      icon: sel,
      iconBg: "#04387d",
      date: "May 2025 - present",
      points: [
        "Develop software that delights users and empowers Manufacturing",
        "Understand hardware and software interactions in a test system", 
        "Collaborate with product experts to understand requirements to design and build quality test solutions" ,
        "Analyze test results, detect issues, and track root causes" ,
        "Relentlessly improve the experience of your software users",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TravelBuddy",
      description:
        "Web-based platform that allows users to use aritficial intelligence to generate, manage, and save travel itineraries.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: travelbuddy,
      source_code_link: "https://github.com/Ogieriakhi17/TravelBuddy/",
    },
    {
      name: "Spreadsheet Application",
      description:
        "Mobile application that simulates that of a spreadsheet application including formula calculation and cell coloring",
      tags: [
        {
          name: "avalonia",
          color: "blue-text-gradient",
        },
        {
          name: "c-sharp",
          color: "green-text-gradient",
        },
        {
          name: "logic engine",
          color: "pink-text-gradient",
        },
      ],
      image: spreadsheet,
      source_code_link: "https://github.com/Ogieriakhi17/Spreadsheet-Application/",
    },
    {
      name: "Java Ball Game",
      description:
        "A game that where users track moving balls and try to tap them to gains points and achieve a highscore",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: javagame,
      source_code_link: "https://github.com/Ogieriakhi17/JavaBallGame.git",
    },
    {
      name: "Portfolio Website",
      description:
        "A full responsive 3D website showcasing my portfolio.(you are on it right now😁).",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "three-js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Ogieriakhi17/portfolio-website/",
    },
 
    {
      name: "Hackronomics",
      description:
        "An AI-driven finance tracking web app that helps users monitor expenses, manage budgets, and discover cost-effective alternatives using AI recommendations",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: hackdash,
      source_code_link: "https://github.com/Ogieriakhi17/Hackronomics.git",
    },
  ];

  const extracurriculars = [
    {
      title: "WSU Black Student Union",
      description: "I actively participate in fostering a supportive community for Black students by engaging in cultural, educational, and social events to promote unity, awareness, and inclusion on campus.",
      tags: [
        { name: "Empowerment", color: "blue-text-gradient" },
        { name: "Engagement", color: "green-text-gradient" },
      ],
      image: bsu,  
    },
    {
      title: "National Society of Black Engineers",
      description: "I currently serve as a chapter senator, collaborating with peers to plan initiatives, attend conferences, and promote STEM opportunities for underrepresented communities, while enhancing leadership and networking skills.",
      tags: [
        { name: "Music", color: "pink-text-gradient" },
        { name: "Guitar", color: "blue-text-gradient" },
      ],
      image: nsbegroup, 
    },
    {
      title: "WSU Soccer Intramurals",
      description: "I compete in intramural soccer leagues, showcasing teamwork, strategy, and dedication. Winning the championship four times (I am not trying to brag... ok maybe a little😁).",
      tags: [
        { name: "Sports", color: "blue-text-gradient" },
        { name: "Teamwork", color: "green-text-gradient" },
      ],
      image: intramurals,  
    },
    {
      title: "Crimson Code Hackathon",
      description: "I repeatedly participate in the annual Crimson Code Hackathon, collaborating with a team to develop innovative solutions under time constraints. Leveraged technical skills, creative problem-solving, and teamwork to design and implement a functional project, gaining valuable experience in real-world software development and innovation.",
      tags: [
        { name: "Coding", color: "pink-text-gradient" },
        { name: "Collaboration", color: "blue-text-gradient" },
      ],
      image: crimsoncode, 
    },
    

  ];
  
  
  export { services, technologies, experiences, testimonials, projects, extracurriculars };