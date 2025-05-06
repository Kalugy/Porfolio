import Header from '../components/Home/Header';
import ResumeHome from '../components/Home/ResumeHome';
import Projects from '../components/Home/ProjectsHome';
import ContactHome from '../components/Home/ContactHome';
function HomeScreen() {
 
  return (
      <div>
        <Header/>

        <ResumeHome />
        
        <Projects />
        <ContactHome />
      </div>
  )
}
 


export default HomeScreen


