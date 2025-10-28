import { Code  } from 'lucide-react';
import Section from './Section.jsx';
import Pills from './skillPills.jsx';
const Skills=()=>{
        const skills=['Java','C','HTML','CSS','JavaScript','React JS','Git'];
return <Section icon={<Code  />} sectionHeading="Skills">
   { skills.map(title=> <Pills  key={title} title={title}/>)}

</Section>;
}
export default Skills;