import Header from '../components/Home/Header';
import ResumeHome from '../components/Home/ResumeHome';
import Projects from '../components/Home/ProjectsHome';
import ContactHome from '../components/Home/ContactHome';
import StackHome from '../components/Home/StackHome';

function HomeScreen() {
 
  return (
      <div>
        <Header/>

        <ResumeHome />
        <StackHome />
        <Projects />
        <ContactHome />
      </div>
  )
}
 


export default HomeScreen


