import Header from '../components/Home/Header';
import ResumeHome from '../components/Home/ResumeHome';
import Projects from '../components/Home/ProjectsHome';
import ContactHome from '../components/Home/ContactHome';
import StackHome from '../components/Home/StackHome';
import { useCinemaMode } from '../context/CinemaModeContext';

function HomeScreen() {
  const { isCinemaMode } = useCinemaMode();

  return (
      <div>
        <Header/>

        <div className={isCinemaMode ? 'hidden' : 'opacity-100'}>
          <ResumeHome />
          <StackHome />
          <Projects />
          <ContactHome />
        </div>
      </div>
  )
}
 


export default HomeScreen


