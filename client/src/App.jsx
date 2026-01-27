import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LandingPage from './pages/landingpage/LandingPage';
import MenuPage from './pages/Menu/MenuPage';
import TechnologyPage from './pages/Technology/TechnologyPage';
import SelectedTechnology from './pages/SelectedTechnology/SelectedTechnology';
import GuidePage from './pages/Guidepage/GuidePage';
import DigitalCourses from './pages/DigitalCourses/DigitalCourses';
import Projects from './pages/Projects/Projects';
import RegisterProject from './pages/RegisterProject/RegisterProject';
import LogIn from './pages/LogIn/LogIn';
import GuideStep1 from './pages/GuideStep1/GuideStep1';
import GuideStep2 from './pages/GuideStep2/GuideStep2';
import FilamentPage from './pages/FilamentPage/FilamentPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path= '/technology' element={<TechnologyPage/>} />
          <Route path= '/select' element={<SelectedTechnology/>}/>
          <Route path='/guide' element={<GuidePage/>}/>
          <Route path='/step1' element={<GuideStep1/>}/>
          <Route path='/step2' element={<GuideStep2/>}/>
          <Route path='/filaments' element={<FilamentPage/>}/>
          <Route path='/courses' element={<DigitalCourses/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/register' element={<RegisterProject/>}/>
          <Route path='/login' element={<LogIn/>}/>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Legg til flere ruter her */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;