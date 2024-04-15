"use client";
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useRouter } from 'next/navigation';

const Hello = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)


  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/studentlogin');
    }
  }, []);
  
  


  
  return (
    <div>
      {isLoggedIn && <div>Hello</div>}
    </div>
  );
};

export default Hello;
