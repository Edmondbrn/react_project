import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin.jsx';

function App() {

  return (
      <Router>
        <Routes>
          <Route path = "/signin" element = {<Signin />}/>
        </Routes>
      </Router>
  );
}

export default App;