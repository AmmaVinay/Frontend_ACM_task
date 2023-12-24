// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar'; // Corrected import statement

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = (userData) => {
    // Perform registration logic (e.g., API call to register the user)
    // For demonstration purposes, simulate registration success
    setIsRegistered(true);
  };

  const handleLogin = () => {
    // Perform login logic (e.g., API call to authenticate the user)
    // For demonstration purposes, simulate login success
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          {isRegistered ? (
            isLoggedIn ? (
              <p>User is already logged in. Redirecting...</p>
            ) : (
              <Login onLogin={handleLogin} />
            )
          ) : (
            <SignUpForm onSignUp={handleSignUp} />
          )}
        </Route>
        <Route path="/signup">
          <SignUpForm onSignUp={handleSignUp} />
        </Route>
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <p>User is not logged in. Redirecting...</p>}
        </Route>
      </div>
    </Router>
  );
}

export default App;
