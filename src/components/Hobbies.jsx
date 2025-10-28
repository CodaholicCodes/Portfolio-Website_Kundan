import { Heart } from 'lucide-react';
import Section from './Section.jsx';
import List from './List.jsx';
const Hobbies=()=>{
    const Hobbies=[
        "Building web applications",
         "Exploring new UI trends",
        "Solving coding challenges",
        "Learning new technologies"
    ];
return <Section icon={<Heart />} sectionHeading="Hobbies & Interests">
<List items={Hobbies}/>
</Section>;
}
export default Hobbies;