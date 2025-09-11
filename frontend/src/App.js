import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './features/login/Login.jsx';
import Signin from './features/signin/Signin.jsx';
import HomePage from './features/homePage/HomePage.jsx';
import ImportDna from './features/import/dna/ImportDna.jsx';
import ProtectedRoute from './shared/utils/auth/ProtectedRoute.jsx';
import { AuthProvider } from './shared/utils/auth/AuthContext.js';


function App() {

  return (
    <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path = "/signin" element = {<Signin />}/>
            <Route path = "/login" element = {<Login />}/>

            {/* Private routes */}
            <Route element = {<ProtectedRoute />}>
              <Route path = "/homePage" element = {<HomePage />}/>
              <Route path = "/import/dna" element = {<ImportDna />}/>
            </Route>

            {/* default redirection */}
            <Route path = "*" element = {<Navigate to = "/login"/>}></Route>
          </Routes>
        </Router>

    </AuthProvider>
  );
}

export default App;