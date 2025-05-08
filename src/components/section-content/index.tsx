
// Type definitions for different section content structures
interface AboutContent {
  bio: string;
  interests: string[];
  philosophy: string;
}

interface SkillItem {
  name: string;
  level: number;
}

interface SkillsContent {
  technical: SkillItem[];
  soft: string[];
  tools: string[];
}

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  gradYear: string;
  achievements: string[];
}

interface ExperienceContent {
  jobs: Job[];
  education: Education;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

interface ProjectsContent {
  featuredProjects: Project[];
  caseStudies: CaseStudy[];
}

interface ContactContent {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  availability: string;
  preferredContact: string;
  location: string;
}

type SectionContentType = AboutContent | SkillsContent | ExperienceContent | ProjectsContent | ContactContent;

interface SectionContentProps {
  sectionId: string;
  content: SectionContentType;
}

export default function SectionContent({ sectionId, content }: SectionContentProps) {
  // Render content based on section ID
  switch (sectionId) {
    case 'about':
      return renderAboutContent(content as AboutContent);
    case 'skills':
      return renderSkillsContent(content as SkillsContent);
    case 'experience':
      return renderExperienceContent(content as ExperienceContent);
    case 'projects':
      return renderProjectsContent(content as ProjectsContent);
    case 'contact':
      return renderContactContent(content as ContactContent);
    default:
      return <div>No content available</div>;
  }
}

function renderAboutContent(content: AboutContent) {
  return (
    <div className="text-sm md:text-base">
      <p className="mb-3">{content.bio}</p>
      
      <h3 className="text-sm md:text-base font-bold mt-3 mb-2">Interests</h3>
      <div className="flex flex-wrap gap-2">
        {content.interests.map((interest, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
            {interest}
          </span>
        ))}
      </div>
      
      <p className="mt-3 italic">{content.philosophy}</p>
    </div>
  );
}

function renderSkillsContent(content: SkillsContent) {
  return (
    <div className="text-sm md:text-base">
      <h3 className="text-sm md:text-base font-bold mb-2">Technical Skills</h3>
      <div className="space-y-2">
        {content.technical.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-sm md:text-base font-bold mt-3 mb-1">Soft Skills</h3>
      <div className="flex flex-wrap gap-1 mb-3">
        {content.soft.map((skill, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>
      
      <h3 className="text-sm md:text-base font-bold mt-3 mb-1">Tools</h3>
      <div className="flex flex-wrap gap-1">
        {content.tools.map((tool, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function renderExperienceContent(content: ExperienceContent) {
  return (
    <div className="text-sm md:text-base">
      <h3 className="text-sm md:text-base font-bold mb-2">Work History</h3>
      <div className="space-y-3">
        {content.jobs.map((job, index) => (
          <div key={index} className="border-l-2 border-gray-600 pl-3">
            <h4 className="font-bold">{job.title}</h4>
            <p className="text-gray-300">{job.company} | {job.period}</p>
            <p className="text-xs md:text-sm mt-1">{job.description}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 px-1 py-0.5 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-sm md:text-base font-bold mt-3 mb-1">Education</h3>
      <div className="border-l-2 border-gray-600 pl-3">
        <h4 className="font-bold">{content.education.degree}</h4>
        <p className="text-gray-300">{content.education.institution} | {content.education.gradYear}</p>
        <ul className="text-xs md:text-sm mt-1 list-disc list-inside">
          {content.education.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function renderProjectsContent(content: ProjectsContent) {
  return (
    <div className="text-sm md:text-base">
      <div className="space-y-3">
        {content.featuredProjects.map((project, index) => (
          <div key={index} className="border-b border-gray-700 pb-2">
            <h4 className="font-bold">{project.title}</h4>
            <p className="text-xs md:text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-1 my-1">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 px-1 py-0.5 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs inline-flex items-center"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderContactContent(content: ContactContent) {
  return (
    <div className="text-sm md:text-base">
      <div className="space-y-2">
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${content.email}`} className="text-blue-400 hover:text-blue-300">
            {content.email}
          </a>
        </p>
        
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <a href={`https://${content.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            Alex Joshua - LinkedIn
          </a>
        </p>
        
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <a href={`https://${content.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            hyperxtend
          </a>
        </p>
        
      </div>
      
      <p className="flex items-center mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{content.location}</span>
        </p>

  
        
        <p className="flex items-center mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{content.preferredContact}</span>
      </p>
      
        <div className="mt-3 space-y-2">
        <p className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{content.availability}</span>
        </p>
      
      </div>
    </div>
  );
}