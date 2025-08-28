import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './features/login/Login.jsx';
import Signin from './features/signin/Signin.jsx';
import HomePage from './features/homePage/HomePage.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path = "/signin" element = {<Signin />}/>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/homePage" element = {<HomePage />}/>
        </Routes>
      </Router>
  );
}

export default App;