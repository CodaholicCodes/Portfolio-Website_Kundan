import { Briefcase } from "lucide-react";
import Section from "../Section.jsx";
import Project from "./project.jsx";
const Projects = () => {
  const projectsList = [
    {
      title: "Airbnb Clone",
      desc: "Developed a full-stack Airbnb-inspired platform featuring property listings, user authentication, booking functionality, and database integration.",
      techUsed: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl : "https://airbnb-4r1m.onrender.com",

    },
    {
      title: "Currency Converter",
      desc: "Built a real-time currency converter that fetches live exchange rates through API integration.",
      techUsed: ["React", "Tailwind CSS", "REST API", "Next JS"],
      demoUrl : "https://currencyconverter-frontend-1opb.onrender.com",
    },
      {
      title: "Spam Detection App",
      desc: "Created a spam message detection system using a static dataset of 100 messages to classify spam and non-spam content.",
      techUsed: ["React", "Node.js", "Express", "Tailwind CSS"],
      demoUrl : "https://spam-detector-frontend-4h9c.onrender.com/"
    },
  ];
  return (<Section icon={<Briefcase />} sectionHeading={"Projects"}>
{
projectsList.map((item) => 
  <Project title={item.title} desc={item.desc} techStack={item.techUsed} demoUrl="{demoUrl}"  />
)
}
</Section>);
}
export default Projects;
