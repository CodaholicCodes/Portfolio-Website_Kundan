import { Globe, Github , Linkedin,Twitter , CodeXml   } from 'lucide-react';
import SocialMedia from './SocialMedia.jsx';
import Section from './Section.jsx';
const Contacts=()=>{
    const socialLinks=[{icon : <Linkedin />,title : "Linkedin" ,url: "https://www.linkedin.com/in/kundan-singh-27b93327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},{icon : <Github />, title : "Github" ,url: "https://github.com/CodaholicCodes"},{icon : <CodeXml/>, title : "Leetcode" ,url: "https://leetcode.com/u/CodaholicKundan/"}];
return <div className="pb-6">
    <Section icon={<Globe />} sectionHeading="Contacts & Social Media">
    <p className=" text-gray-700 mb-4">
Email : kundansingh68788@gmail.com <br />
Phone : 8249307252
</p>
{socialLinks.map(item=> <SocialMedia icon={item.icon} key={item.title} title={item.title} url={item.url} />)}
</Section>
</div>;
}
export default Contacts;