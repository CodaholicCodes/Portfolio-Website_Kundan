
import './App.css'
import Header from './components/header.jsx';
import Aboutme from './components/aboutme.jsx';
import Projects from './components/project/Projects.jsx';
import Skills from './components/Skills.jsx'; 
import Education from './components/Education.jsx'; 
import Hobbies from './components/Hobbies.jsx'; 
import Contacts from './components/Contacts.jsx'; 
import ExtraCurricular from './components/ExtraCurricular.jsx'; 
function App() {
return (<>
<div className='bg-slate-100  px-3 py-8'>
  <div className='bg-white max-w-4xl mx-auto rounded-xl shadow-lg'> 
    <Header />
     <Aboutme /> 
     <Projects />
     <Education />
     <Skills />
     <Hobbies />
     <ExtraCurricular />
     <Contacts />
      </div>

    </div>
    </>
  );
}

export default App;
