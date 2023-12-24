// src/components/Login/index.js
import React, { Component } from 'react';
import AuthService from '../../services/AuthService';  

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
    redirectToDashboard: false,
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Basic validation for required fields
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // Simulating a successful login for demonstration purposes
      // In a real-world scenario, this would involve communication with a backend server
      AuthService.login(email, password)
        .then(() => {
          this.setState({ redirectToDashboard: true });
        })
        .catch((error) => {
          console.error('Login failed:', error.message);
          // Handle login error (e.g., display an error message to the user)
        });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: '', // Clear the error when the user starts typing
      },
    });
  };

  render() {
    const { email, password, errors, redirectToDashboard } = this.state;

    if (redirectToDashboard) {
      // Redirect to the Dashboard page if login is successful
      // You may want to use react-router's history.push for navigation in a real application
      return <p>Redirecting to Dashboard...</p>;
    }

    return (
      <div>
        <h1>Login user</h1>
        <div>
          <form onSubmit={this.onSubmitForm}>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              {errors.password && (
                <span style={{ color: 'red' }}>{errors.password}</span>
              )}
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
