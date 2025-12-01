import Header from '../components/Home/Header';
import ResumeHome from '../components/Home/ResumeHome';
import Projects from '../components/Home/ProjectsHome';
import ContactHome from '../components/Home/ContactHome';
import StackHome from '../components/Home/StackHome';
import Rain from '../components/Rain/Rain';

function HomeScreen() {
 
  return (
      <div>
        <Header/>
        {/* Rain is already included in Header component */}

        <ResumeHome />
        {/* To add rain to ResumeHome, wrap it: 
            <div className="relative">
              <Rain intensity={30} speed="slow" opacity={0.4} />
              <ResumeHome />
            </div>
        */}

        <StackHome />
        {/* To add rain to StackHome:
            <div className="relative">
              <Rain intensity={40} speed="normal" opacity={0.5} />
              <StackHome />
            </div>
        */}

        <Projects />
        {/* To add rain to Projects:
            <div className="relative">
              <Rain intensity={60} speed="fast" opacity={0.6} />
              <Projects />
            </div>
        */}

        <ContactHome />
        {/* To add rain to ContactHome:
            <div className="relative">
              <Rain intensity={25} speed="slow" opacity={0.3} />
              <ContactHome />
            </div>
        */}
      </div>
  )
}
 


export default HomeScreen


