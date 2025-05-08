
// About Section
export const ABOUT_ID = "about";
export const ABOUT_TITLE = "About Me";
export const ABOUT_DESCRIPTION = "I'm a passionate full-stack developer with expertise in building innovative applications";
export const ABOUT_BIO = "As a developer with over 5 years of experience, I specialize in building innovative solutions & interactive applications. I enjoy pushing the boundaries of what's possible with a practical approach combining clean coding practices with innovative design thinking.";
export const ABOUT_INTERESTS = ["Web Development", "UI/UX Design", "Technology", "Mobile Development", "Traveling", "Cooking", "Hiking", "Photography"];
export const ABOUT_LAT = -33.55;
export const ABOUT_LNG = 18.42;

// Skills Section
export const SKILLS_ID = "skills";
export const SKILLS_TITLE = "Skills";
export const SKILLS_DESCRIPTION = "My technical toolkit spans frontend, design & DevOps technologies with special focus on modern JavaScript frameworks";
export const SKILLS_TECHNICAL = [
  { name: "JavaScript/TypeScript", level: 93 },
  { name: "React/Next.js", level: 88 },
  { name: "React Native", level: 68 },
  { name: "Python", level: 76 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "Angular", level: 74 },
  { name: "Redux", level: 82 },
  { name: "SQL", level: 62 },
];
export const SKILLS_SOFT = ["Problem Solving", "Design", "Communication", "Teamwork", "Creativity", "Adaptability"];
export const SKILLS_TOOLS = ["Git", "Docker", "Azure", "Jenkins", "YAML", "Figma", "Adobe - Ps/Xd/Ai/Lr", "VSCode"];
export const SKILLS_LAT = 53.72;
export const SKILLS_LNG = -127.64;

// Experience Section
export const EXPERIENCE_ID = "experience";
export const EXPERIENCE_TITLE = "Experience";
export const EXPERIENCE_DESCRIPTION = "My professional journey includes working with brands, 3rd-parties, diverse teams and projects";
export const EXPERIENCE_JOBS = [
  {
    title: "Intermediate Frontend Developer",
    company: "Global Kinetic",
    period: "2022 - Present",
    description: "Developed and maintained web applications, creating and maintain coding standards & monitoring projects in production. Collaboration with 3rd parties, designers and backend developers for full scale solutions.",
    technologies: ["Next.js", "React Native", "SQL", "Docker"],
  },
  {
    title: "Junior Frontend Developer",
    company: "Global Kinetic",
    period: "2020 - 2022",
    description: "Built scalable web applications and projects for clients. Specialized in creating responsive, performant user interfaces with complex backend integrations.", 
    technologies: ["React", "Node.js", "TypeScript", "Redux", "Angular"],
  },
  {
    title: "Intern - Frontend Developer",
    company: "Global Kinetic",
    period: "2019 - 2020",
    description: "Build application components and features, getting hands-on experience with React and Redux with feature delivery in mind.",
    technologies: ["React", "Node.js", "JavaScript", "Redux"],
  },
  {
    title: "Brand Ambassador",
    company: "Perfect Solutions",
    period: "2017 - 2019",
    description: "A role that involved promoting the brand and its products, engaging with customers, and providing feedback to the marketing team.",
    technologies: ["Digital Marketing", "Customer Engagement", "Social Media Management"],
  },
];
export const EXPERIENCE_EDUCATION = {
  degree: "Junior Web Developer",
  institution: "HyperionDev",
  gradYear: "2019",
  achievements: ["Core principles of Software engineering", "Web Development fundamentals"],
};
export const EXPERIENCE_LAT = 35.6762;
export const EXPERIENCE_LNG = 139.6503;

// Projects Section
export const PROJECTS_ID = "projects";
export const PROJECTS_TITLE = "Projects";
export const PROJECTS_DESCRIPTION = "A showcase of my work - demonstrating my capabilities in creating interactive, visually engaging applications.";
export const PROJECTS_FEATURED = [
  {
    id: "weather-app",
    title: "Weather App",
    description: "A visually stunning weather application with animated backgrounds that change based on current conditions and time of day.",
    technologies: ["React", "Open Weather API", "Jest", "Tailwind CSS"],
    link: "https://hyperxtend.github.io/whether-the-weather/",
  },
];
export const PROJECTS_LAT = -33.8688;
export const PROJECTS_LNG = 151.2093;

// Contact Section
export const CONTACT_ID = "contact";
export const CONTACT_TITLE = "Contact";
export const CONTACT_DESCRIPTION = "I'm always interested in new opportunities, collaborations, or just connecting with fellow developers, designers & creatives";
export const CONTACT_CONTENT = {
  email: "ialexjoshua@gmail.com",
  linkedin: "https://www.linkedin.com/in/alex-joshua-80817018b/",
  github: "https://github.com/hyperxtend",
  availability: "Permanently employed, but always open to freelance projects and consulting opportunities.",
  preferredContact: "Email is the best way to reach me",
  location: "Cape Town, South Africa - available for remote work or relocation",
};
export const CONTACT_LAT = 48.8566;
export const CONTACT_LNG = 2.3522;

// Reconstructed Constants
export const PORTFOLIO_SECTIONS = [
  {
    id: ABOUT_ID,
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    content: {
      bio: ABOUT_BIO,
      interests: ABOUT_INTERESTS,
    },
    lat: ABOUT_LAT,
    lng: ABOUT_LNG,
  },
  {
    id: SKILLS_ID,
    title: SKILLS_TITLE,
    description: SKILLS_DESCRIPTION,
    content: {
      technical: SKILLS_TECHNICAL,
      soft: SKILLS_SOFT,
      tools: SKILLS_TOOLS,
    },
    lat: SKILLS_LAT,
    lng: SKILLS_LNG,
  },
  {
    id: EXPERIENCE_ID,
    title: EXPERIENCE_TITLE,
    description: EXPERIENCE_DESCRIPTION,
    content: {
      jobs: EXPERIENCE_JOBS,
      education: EXPERIENCE_EDUCATION,
    },
    lat: EXPERIENCE_LAT,
    lng: EXPERIENCE_LNG,
  },
  {
    id: PROJECTS_ID,
    title: PROJECTS_TITLE,
    description: PROJECTS_DESCRIPTION,
    content: {
      featuredProjects: PROJECTS_FEATURED,
    },
    lat: PROJECTS_LAT,
    lng: PROJECTS_LNG,
  },
  {
    id: CONTACT_ID,
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    content: CONTACT_CONTENT,
    lat: CONTACT_LAT,
    lng: CONTACT_LNG,
  },
];

export const PROJECTS = [
  {
    id: "weather-app",
    title: "Weather App",
    desc: "A visually stunning weather application using modern APIs",
    url: "https://hyperxtend.github.io/whether-the-weather/",
  },
];