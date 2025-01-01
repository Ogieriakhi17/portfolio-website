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
    figma,
    docker,
    tripguide,
    threejs,
  } from "../assets";
  
  import usda from "../assets/usda.jpg"
  import wnyaa from "../assets/wnyaa.jpeg"
  import wsu_vcea from "../assets/company/wsu_vcea.jpeg"
  import nsbe from "../assets/company/nsbe.png"
  import travelbuddy from "../assets/travelbuddy.jpg"
  import spreadsheet from "../assets/spreadsheet.jpg"
  import python from "../assets/tech/python.jpeg"
  import c from "../assets/tech/c.png"
  import crimsoncode from "../assets/crimsoncode.jpg"
  import bsu from "../assets/bsu.jpg"
  import intramurals from "../assets/intermurals.png"
  import nsbegroup from "../assets/nsbegroup.jpg"

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
    {
      id: "extracurriculars",
      title: "Extracurriculars",
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
      date: "August 2023 - present",
      points: [
        "Representing the interests of the National Society of Black Engineers (NSBE) chapter as Senator, collaborating with leadership and members to support organizational goals.",
        "Working with diverse teams to plan and execute events, such as industry mixers and professional development workshops, fostering connections between students and industry professionals",
        "Advocating for member concerns, ensuring their voices are heard in chapter decisions and promoting an inclusive and supportive environment.",
        "Contributing to the growth of the chapter by strategizing initiatives to increase engagement and participation among members.",
      ],
    },
    {
      title: "Undergrad Teaching Assistant",
      company_name: "WSU College of Engineering & Computer Science",
      icon: wsu_vcea,
      iconBg: "#9E1B32",
      date: "August 2024 - December 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Mobile application that simulates that of a spreadshet application including formula calculation and cell coloring",
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
      name: "ffff",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
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
      image: tripguide,
      source_code_link: "https://github.com/Ogieriakhi17/portfolio-website/",
    },
  ];

  const extracurriculars = [
    {
      title: "WSU Black Student Union",
      description: "Actively participating in fostering a supportive community for Black students by organizing cultural, educational, and social events to promote unity, awareness, and inclusion on campus.",
      tags: [
        { name: "Empowerment", color: "blue-text-gradient" },
        { name: "Engagement", color: "green-text-gradient" },
      ],
      image: bsu,  
    },
    {
      title: "National Society of Black Engineers",
      description: "Serving as a chapter senator, collaborating with peers to plan initiatives, attend conferences, and promote STEM opportunities for underrepresented communities, while enhancing leadership and networking skills.",
      tags: [
        { name: "Music", color: "pink-text-gradient" },
        { name: "Guitar", color: "blue-text-gradient" },
      ],
      image: nsbegroup, 
    },
    {
      title: "WSU Soccer Intramurals",
      description: "Competing in intramural soccer leagues, showcasing teamwork, strategy, and dedication. Proudly led teams to victory, winning the championship four times.",
      tags: [
        { name: "Sports", color: "blue-text-gradient" },
        { name: "Teamwork", color: "green-text-gradient" },
      ],
      image: intramurals,  
    },
    {
      title: "Crimson Code Hackathon",
      description: "Actively participated in the Crimson Code Hackathon, collaborating with a team to develop innovative solutions under time constraints. Leveraged technical skills, creative problem-solving, and teamwork to design and implement a functional project, gaining valuable experience in real-world software development and innovation.",
      tags: [
        { name: "Coding", color: "pink-text-gradient" },
        { name: "Collaboration", color: "blue-text-gradient" },
      ],
      image: crimsoncode, 
    },
    

  ];
  
  
  export { services, technologies, experiences, testimonials, projects, extracurriculars };