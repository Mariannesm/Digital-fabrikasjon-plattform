import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Legg til flere ruter her */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;