"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const AllCourseDataContext = createContext();

const AllCourseDataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/course/allCourses`);
        const jsonData = await response.json();
        setData(jsonData);
       console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   
      fetchData();
    
  });

  const contextValue = useMemo(() => ({ data }), [data]);

  return (
    <AllCourseDataContext.Provider value={contextValue}>
      {children}
    </AllCourseDataContext.Provider>
  );
};

export { AllCourseDataContext, AllCourseDataProvider };

