"use client";
import React, { createContext, useState, useEffect, useMemo } from 'react';

const ProjectDataContext = createContext();

const ProjectDataProvider = ({ children, projectCode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/project/projectTopics/${projectCode}`);
        const jsonData = await response.json();
        setData(jsonData);
     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (projectCode) {
      fetchData();
    }
  }, [projectCode]);

  const contextValue = useMemo(() => ({ data, projectCode }), [data, projectCode]);

  return (
    <ProjectDataContext.Provider value={contextValue}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export { ProjectDataContext, ProjectDataProvider };
