import { User } from 'lucide-react';
import Section from './Section.jsx';
const Aboutme=()=>{
return <div className="mt-6">
 <Section icon={<User />} sectionHeading="About Me">
 <p>
I’m a full-stack developer with a strong foundation in data structures and algorithms. I enjoy building scalable, user-focused applications and writing clean, efficient code. My work spans both frontend and backend development, allowing me to create complete end-to-end solutions. I’m always exploring new technologies, improving my problem-solving skills, and taking on challenges that help me grow as an engineer..
 </p>
    </Section>
    </div>  ;
}
export default Aboutme;