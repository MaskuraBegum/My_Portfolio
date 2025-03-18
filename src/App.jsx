import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className='  bg-gradient-to-b from-gray-950 via-gray-500 to-gray-950'>
     
      <div className=' overflow-x-hidden w-full pt-10'>
    
      <Navbar />
      
        <Header id="header" />
        <About id="about" />
        <Skill id="skill" />
        <Project id="project" />
        <Education id="education" />
        <Experience id="experience" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
