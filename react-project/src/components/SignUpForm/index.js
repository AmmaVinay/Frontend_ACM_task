// src/components/SignUpForm/index.js
import React, { useState } from 'react';
import './index.css';

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Add your signup logic here
    try {
      // Perform any necessary validation on the form data

      // Simulate a successful signup for demonstration purposes
      // In a real-world scenario, this would involve communication with a backend server

      // Additional post-signup logic
      console.log('User signed up successfully. Additional logic can go here.');

      // Trigger the parent component's onSignUp function
      onSignUp(formData);
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle any other post-signup logic here
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
