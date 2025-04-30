import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} /> 
          {/*<Route path="/team" element={<TeamScreen />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App


