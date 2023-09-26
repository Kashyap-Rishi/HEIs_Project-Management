"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {signIn,useSession} from 'next-auth/react';



import './studlogin.css'

const StudentLoginPage = () => {


 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit2 = async(e: React.FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();
    const signInData = await signIn('credentials',{
      username:username,
      password:password,
      redirect:false,
    })
    if (signInData?.error) {
      console.error('Error during sign-in:', signInData.error);
    } else if (signInData?.ok) {
     
     const redirectToPage = `userdashboard/${username}/userprojects`
window.location.href = redirectToPage;

      
    
     
     
    } 
 
    
  };

  return (
    <div className="instlg-main">
    <div className="login-form">
    <h2>Student Login</h2>
      <form onSubmit={handleSubmit2}>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange2}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange2}
            required
          />
        </div>
        <button className="inst-btn" type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link className="sg-direct" href="studentsignup">
          Sign up
        </Link>
      </p>

    </div>
    </div>
  );
};

export default StudentLoginPage;