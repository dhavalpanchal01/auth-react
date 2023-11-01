import React from 'react';
import { NavLink,  useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const Navbar = () => {

  const { authenticated, setAuthenticated } = useAuth();

  const navigate = useNavigate();


  const logout = () => {
    setAuthenticated(false);
    navigate('/login');
  }


  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex gap-2 items-center">
        <NavLink to="/" className="text-white mr-4 hover:text-blue-200">
          Home
        </NavLink>

       { !authenticated && <NavLink to="/login" className="text-white mr-4 hover:text-blue-200">
          Login
        </NavLink>}

        {
          authenticated && <NavLink to="/dashboard" className="text-white mr-4 hover:text-blue-200"> Dashboard</NavLink>
        }

        {
          authenticated && <NavLink to="/profile" className="text-white mr-4 hover:text-blue-200"> Profile</NavLink>
        }
  
        {authenticated && (
          <button  onClick={logout} className="text-white mr-4 hover:text-blue-200">
            Logout
          </button>
        )}





      </div>
    </nav>
  );
};

export default Navbar;
