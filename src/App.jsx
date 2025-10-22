import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/landingpage/LandingPage';
import StartSide from './pages/Startside/StartSide';
import Teknolgier from './pages/teknologipage/Teknologier';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/meny' element={<StartSide/>} />
          <Route path= '/teknologimeny' element={<Teknolgier/>} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Legg til flere ruter her */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;