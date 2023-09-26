"use client";

import { useRouter } from 'next/navigation';
import './instsignup.css'
// components/SignupForm.tsx

import React, { useState } from 'react';

const SignupForm = () => {
  const router =useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [instituteName, setInstituteName] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleInstituteNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstituteName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle signup logic here (e.g., send data to server)

    try{
      const response = await fetch('/api/createinstitutes',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:username,
          email:email,
          password:password,
          institutename:instituteName
        }),
      })

    if(response.ok) {
      router.push('/institutelogin');
    }  else {
      const data = await response.json();
      console.error('Registration failed:', data.error);
      // Display the error message to the user
    }

      }
    
   catch (error) {
    console.error('Error occurred while registering:', error);
   }



  };

  return (
    <div className="instsp-main">
    <div className="signup-form">
      <h2>Institute Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="form-group2">
          <label htmlFor="instituteName">Institute Name:</label>
          <input
            type="text"
            id="instituteName"
            name="instituteName"
            value={instituteName}
            onChange={handleInstituteNameChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
