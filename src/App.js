
import { UserContextComponent } from './components/Context/UserContextComponent';
import LoginPage from './components/loginpage/LoginPage';
import './components/messages/MessageStyles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import ForgotPage from './components/forgotpasswordpage/ForgotPage';
import AdminHome from './components/HomePage/AdminHome';
import './App.css';
import TaskBoard from './components/TaskComponent/TaskBoard';


function App() {
  return (
    <UserContextComponent>
    <Router>
      <Routes>
          <Route path='/' exact element={<LandingPage/>}/>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/reset" exact element={<ForgotPage></ForgotPage>} />
          {/* <Route path='/home' exact element={<AdminHome></AdminHome>}/> */}
          <Route path='/home' exact element={<AdminHome/>}/>
      </Routes>
    </Router>
    </UserContextComponent>
  );
}
export default App;
