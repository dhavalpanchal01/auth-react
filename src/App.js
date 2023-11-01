import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Layout from './Layout';

// navbar 
import Navbar from './components/Navbar';

// pages 
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


import { useAuth } from './contexts/AuthContext';
import Profile from './components/Profile';




function App() {

  const {authenticated, setAuthenticated} = useAuth();

    const navigate = useNavigate();

  return (
    <>
    <Routes>

      <Route path='/' element={<Layout/>}> 


      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    


      {
        authenticated &&
        <Route path='/dashboard' element={<Dashboard/>}/>
      }
      {
        authenticated && 
        <Route path='/profile' element={<Profile/>} />
      }
      {
        !authenticated && 
        <Route path='*' element={<Login/>}/>
      }
        
     
      </Route>
  
    </Routes>
    </>
  );
}

export default App;
