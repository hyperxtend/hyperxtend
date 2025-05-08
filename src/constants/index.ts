
export const PORTFOLIO_SECTIONS = [
  {
    id: "about",
    title: "About Me",
    description: "I'm a passionate full-stack developer with expertise in creating immersive web experiences and 3D visualizations. With a background in computer science and design, I blend technical skill with creative vision to build engaging digital solutions.",
    content: {
      bio: "As a developer with over 5 years of experience, I specialize in building innovative solutions & interactive applications. I enjoy pushing the boundaries of what's possible with a practical approach combining clean coding practices with innovative design thinking.",
      interests: ["Web Development", "UI/UX Design", "Mobile Development", "Interactive Experiences"],
      philosophy: "I believe technology should be both beautiful and functional - creating experiences that delight users while solving real problems."
    },
    lat: 40.7128,
    lng: -74.006
  },
  {
    id: "skills",
    title: "Skills",
    description: "My technical toolkit spans frontend, backend & DevOps technologies with special focus on modern JavaScript frameworks.",
    content: {
      technical: [
        { name: "JavaScript/TypeScript", level: 93 },
        { name: "React/Next.js", level: 88 },
        { name: "React Native", level: 68 },
        { name: "Node.js", level: 72 },
        { name: "Python", level: 76 },
        { name: "CSS/Tailwind", level: 90 },
        { name: "Angular", level: 74 },
      ],
      soft: ["Problem Solving", "Design", "Communication", "Project Management"],
      tools: ["Git", "Docker", "Azure", "Jenkins", "YAML", "Figma", "Adobe - Ps/Xe/", "VSCode"]
    },
    lat: 51.5074,
    lng: -0.1278
  },
  {
    id: "experience",
    title: "Experience",
    description: "My professional journey includes working with startups, agencies, and established companies on a variety of challenging and innovative projects.",
    content: {
      jobs: [
        {
          title: "Senior Frontend Developer",
          company: "TechVision Inc.",
          period: "2022-Present",
          description: "Lead developer for interactive data visualization platform. Implemented 3D globe visualizations using Three.js and WebGL.",
          technologies: ["React", "TypeScript", "Three.js", "Redux"]
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions Agency",
          period: "2019-2022",
          description: "Built scalable web applications for diverse clients. Specialized in creating responsive, performant user interfaces.",
          technologies: ["Next.js", "Node.js", "MongoDB", "GraphQL"]
        },
        {
          title: "Web Developer",
          company: "Creative Tech Studios",
          period: "2017-2019",
          description: "Developed interactive websites and digital experiences. Focused on frontend implementation and animation.",
          technologies: ["JavaScript", "HTML/CSS", "GSAP", "WordPress"]
        }
      ],
      education: {
        degree: "B.S. Computer Science",
        institution: "Tech University",
        gradYear: "2017",
        achievements: ["Graduated with Honors", "Web Development Club President"]
      }
    },
    lat: 35.6762,
    lng: 139.6503
  },
  {
    id: "projects",
    title: "Projects",
    description: "A showcase of my most significant work, demonstrating my capabilities in creating interactive, visually engaging web applications.",
    content: {
      featuredProjects: [
        {
          id: "weather-app",
          title: "Weather App",
          description: "A visually stunning weather application with animated backgrounds that change based on current conditions and time of day.",
          technologies: ["React", "Open Weather API", "Jest", "Tailwind CSS"],
          link: "https://hyperxtend.github.io/whether-the-weather/",
          image: "WeatherApp"
        },

      ],

    },
    lat: -33.8688,
    lng: 151.2093
  },
  {
    id: "contact",
    title: "Contact",
    description: "I'm always interested in new opportunities, collaborations, or just connecting with fellow developers, designers & creatives",
    content: {
      email: "ialexjoshua@gmail.com",
      linkedin: "https://www.linkedin.com/in/alex-joshua-80817018b/",
      github: "https://github.com/hyperxtend",
      availability: "Permanently employed, but always open to freelance projects and consulting opportunities.",
      preferredContact: "Email is the best way to reach me",
      location: "Cape Town, South Africa - available for remote work or relocation",
    },
    lat: 48.8566,
    lng: 2.3522
  }
];

export const PROJECTS = [
  {
    id: "weather-app",
    title: "Weather App",
    desc: "A visually stunning weather application using modern APIs",
    url: "https://hyperxtend.github.io/whether-the-weather/",
  },
];