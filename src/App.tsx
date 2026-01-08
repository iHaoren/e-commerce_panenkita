import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CustomerHome from './components/pages/CustomerHome';
import DashboardProducer from './components/pages/DashboardProducer';


function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/customer" element={<CustomerHome />} />
      <Route path="/producer" element={<DashboardProducer />} />
      </Routes>
    </Router>
  )
}


export default App;