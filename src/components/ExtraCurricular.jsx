import { Award  } from 'lucide-react';
import Section from './Section.jsx';
import List from './List.jsx';
const ExtraCurricular=()=>{
    const curricularitems=["Volunteer for social coding bootcamps for underprivileged youth"
    ,"Member of the College Developer Student Club",
     "Conducted coding and web dev sessions for peers"];
return <Section icon={<Award />} sectionHeading="Extracurricular">
 <List items={curricularitems}/>
</Section>;
}
export default ExtraCurricular;