import { Briefcase } from "lucide-react";
import Section from "../Section.jsx";
import Project from "./project.jsx";
const Projects = () => {
  const projectsList = [
    {
         title: "Full Stack E-commerce Website",
      desc: "Developed a comprehensive e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      techUsed: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS" , "Redux"],
      demo: "https://singhstorefrontend.onrender.com/",

    },
    {
      title: "Gemini AI Blog Generator",
      desc: "Created an AI-powered blog generator that utilizes Gemini API to produce high-quality articles based on user-defined topics and keywords.",
      techUsed: ["React.js","REST API", "Express.js" , "Node.js" , "MongoDB" , "Gemini API"],
      demo: "https://currencyconverter-frontend-1opb.onrender.com",
    },
      {
     title: "Full Stack Airbnb Clone",
      desc: "Developed a full-stack Airbnb-inspired platform featuring property listings, user authentication, booking functionality, and database integration.",
      techUsed: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demo: "https://airbnb-4r1m.onrender.com",

    },
  ];
  return (<Section icon={<Briefcase />} sectionHeading={"Projects"}>
{
projectsList.map((item) => 
  <Project title={item.title} desc={item.desc} techStack={item.techUsed} demoUrl={item.demo}  />
)
}
</Section>);
}
export default Projects;
