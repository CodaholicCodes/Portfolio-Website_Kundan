import { BookOpen  } from 'lucide-react';
import Section from './Section.jsx';
import Graduation from './Graduation.jsx';
const Education=()=>{
return <Section icon={<BookOpen  />} sectionHeading="Education">
<Graduation title={"Bachelor of Technology in Computer Science"} school={"Parala Mahraja Engineering College"} year={"2024-2028"}/>
<Graduation title={"Full Stack Developement Course [MERN]"} school={"Knowledge Gate"} year={"2025"}/>
</Section>
}
export default Education;