"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {signIn,useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';


import './instlogin.css'

const LoginPage = () => {
  
  

  const router =useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signInData = await signIn('credentials',{
      username:username,
      password:password,
      redirect:false,
    })
    if (signInData?.error) {
      console.error('Error during sign-in:', signInData.error);
    } else if (signInData?.ok) {
     
     const redirectToPage = `institutedashboard/${username}/unverified`
window.location.href = redirectToPage;

      
    
     
     
    } else {
      console.error('Sign-in data is neither an error nor success:', signInData);
    }
 
    
  };

  return (
    <div className="instlg-main">
    <div className="login-form">
    <h2>Institute Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username:</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
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
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="inst-btn" type="submit">Login</button>
      </form>
      <p className="p1-login">
        Don't have an account?{' '}
        <Link className="sg-direct" href="institutesignup">
          Sign up
        </Link>
      </p>
      <p>
        
        <Link className="sg-direct" href="studentlogin">
          Login
        </Link>
         &nbsp;&nbsp;as a student
      </p>

    </div>
    </div>
  );
};

export default LoginPage;
