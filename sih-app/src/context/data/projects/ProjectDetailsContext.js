"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const ProjectDetailsDataContext = createContext();

const ProjectDetailsDataProvider = ({ children, projectDetailsCode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/project/projectDetails/${projectDetailsCode}`);
        const jsonData = await response.json();
        setData(jsonData);
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (projectDetailsCode) {
      fetchData();
    }
  }, [projectDetailsCode]);

  const contextValue = useMemo(() => ({ data, projectDetailsCode }), [data, projectDetailsCode]);

  return (
    <ProjectDetailsDataContext.Provider value={contextValue}>
      {children}
    </ProjectDetailsDataContext.Provider>
  );
};

export { ProjectDetailsDataContext, ProjectDetailsDataProvider };