"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const InstituteDataContext = createContext();

const InstituteDataProvider = ({ children, username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/institute/${username}`);
        const jsonData = await response.json();
        setData(jsonData);
     
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
    <InstituteDataContext.Provider value={contextValue}>
      {children}
    </InstituteDataContext.Provider>
  );
};

export { InstituteDataContext, InstituteDataProvider };
