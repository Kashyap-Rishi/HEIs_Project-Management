"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const CourseDataContext = createContext();

const CourseDataProvider = ({ children, courseCode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/course/${courseCode}`);
        const jsonData = await response.json();
        setData(jsonData);
       console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (courseCode) {
      fetchData();
    }
  }, [courseCode]);

  const contextValue = useMemo(() => ({ data, courseCode }), [data, courseCode]);

  return (
    <CourseDataContext.Provider value={contextValue}>
      {children}
    </CourseDataContext.Provider>
  );
};

export { CourseDataContext, CourseDataProvider };

