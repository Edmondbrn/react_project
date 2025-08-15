import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin.jsx';
import Login from './pages/Login.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path = "/signin" element = {<Signin />}/>
          <Route path = "/login" element = {<Login />}/>
        </Routes>
      </Router>
  );
}

export default App;