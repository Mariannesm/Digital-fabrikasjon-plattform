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
import GuideStep3 from './pages/GuideStep3/GuideStep3';
import FilamentPage from './pages/FilamentPage/FilamentPage';
import RegistraionCourses from './pages/RegistrationCourses/RegistrationCourses';
import Quiz from './pages/Quiz/Quiz';
import RegisterQuiz from './pages/RegisterQuiz/RegisterQuiz'
import ProjectRegistered from './pages/ProjectRegistered/ProjectRegistered'
import LogInAdmin from './pages/LogInAdmin/LogInAdmin';
import AboutUs from './pages/AboutUs/AboutUs';
import Staff from './pages/Staff/Staff';
import EditProject from './pages/EditProject/EditProject';


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
          <Route path='/step3' element={<GuideStep3/>}/>
          <Route path='/filaments' element={<FilamentPage/>}/>
          <Route path='/courses' element={<DigitalCourses/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/registerquiz' element={<RegisterQuiz/>}/>
          <Route path='/RegCourses' element={<RegistraionCourses/>}/>
          <Route path='/RegisteredProject' element={<ProjectRegistered/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/register' element={<RegisterProject/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/loginAdmin' element={<LogInAdmin/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Staff' element={<Staff/>}/>
          <Route path='/EditProject' element={<EditProject/>}/>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Legg til flere ruter her */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;