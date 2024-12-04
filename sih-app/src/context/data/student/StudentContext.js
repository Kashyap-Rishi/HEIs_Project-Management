"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const StudentDataContext = createContext();

const StudentDataProvider = ({ children, username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/student/${username}`);
        const jsonData = await response.json();
        setData(jsonData);
     console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  const contextValue = useMemo(() => ({ data, username }), [data, username]);

  return (
    <StudentDataContext.Provider value={contextValue}>
      {children}
    </StudentDataContext.Provider>
  );
};

export { StudentDataContext, StudentDataProvider };


