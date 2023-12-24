// src/components/Dashboard/index.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import AuthService from '../../services/AuthService';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignUp = async (userData) => {
    try {
      // Simulate a signup process (replace with actual signup logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      AuthService.login(userData); // Simulate login after signup
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup error (e.g., display an error message to the user)
    }
  };

  const handleLogout = () => {
    // Update local state to indicate that the user is not authenticated
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!isAuthenticated && (
            <li>
              {/* Pass the handleSignUp function to the SignUpForm component */}
              <SignUpForm onSignUp={handleSignUp} />
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
