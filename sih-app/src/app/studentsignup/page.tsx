"use client";

import { useRouter } from 'next/navigation';
import './studsignup.css'
import React, { useState } from 'react';

const SignupFormStudent = () => {
  const router =useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [instituteName, setInstituteName] = useState('');

  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleDegreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value);
  };

  const handleBranchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBranch(e.target.value);
  };

  const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndYear(e.target.value);
  };
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
      const response = await fetch('/api/createusers',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:username,
          email:email,
          password:password,
          institutename:instituteName,
          degree:degree,
          branch:branch,
          startyear:startYear,
          endyear:endYear

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
      <h2> Student Sign Up</h2>
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
        <div className="form-group2">
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={degree}
              onChange={handleDegreeChange}
              required
            />
          </div>

          <div className="form-group2">
            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={branch}
              onChange={handleBranchChange}
              required
            />
          </div>

          <div className="form-group2">
            <label htmlFor="startYear">Start Year:</label>
            <input
              type="text"
              id="startYear"
              name="startYear"
              value={startYear}
              onChange={handleStartYearChange}
              required
            />
          </div>

          <div className="form-group2">
            <label htmlFor="endYear">End Year:</label>
            <input
              type="text"
              id="endYear"
              name="endYear"
              value={endYear}
              onChange={handleEndYearChange}
              required
            />
          </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupFormStudent;