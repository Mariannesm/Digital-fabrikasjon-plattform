import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/landingpage/LandingPage';
import MenuPage from './pages/Menu/MenuPage';
import TechnologyPage from './pages/Technology/TechnologyPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path= '/technology' element={<TechnologyPage/>} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Legg til flere ruter her */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;