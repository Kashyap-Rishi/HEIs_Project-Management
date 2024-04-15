"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const DataContext = createContext();

const ProfessorDataProvider = ({ children, username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/professor/${username}`);
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
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, ProfessorDataProvider };


