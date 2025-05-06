import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';
import ProjectScreen from './pages/ProjectScreen';
import { ThemeProvider } from './context/ThemeContext';
import ResumeScreen from './pages/ResumeScreen';
import ContactScreen from './pages/ContactScreen';
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/resume" element={<ResumeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;


