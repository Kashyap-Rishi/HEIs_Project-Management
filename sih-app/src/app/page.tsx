"use client";
import NavBar from "@/components/Navbar/Navbar";
import Recommendation from "@/components/Recommendation/Recommendation";
import "./globals.css"
import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Autocomplete, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import MainProjectCard from "@/components/MainProjectCard/MainProjectCard";


interface Project {
  projectDetailsCode: string;
  title: string;
  description: string;
  teamMembers: string[];
  date: string;
  createTime:string
  likes: string;
  bookmarks: string;
  citations: string;
  statusproject: string;
  statusBackgroundColor: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState('');
  const [institution, setInstitution] = useState('');
  const [course, setCourse] = useState('');

  const formatDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString(); // Converts to local date string, or use .toLocaleDateString('en-US') for a specific locale
  };


  // Fetch projects from API on component mount
  useEffect(() => {
    // Replace 'API_ENDPOINT' with your actual API endpoint
    fetch(`http://localhost:8000/api/project/allProjects`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data.fetchedProjects);
        setFilteredProjects(data.fetchedProjects); // Initialize filteredProjects with all projects
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  useEffect(() => {
    if (searchQuery) {  // Only filter if there is a search query
      let filteredResults = projects.filter(project => {
        const matchesSearchQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category ? project.category === category : true;
        const matchesInstitution = institution ? project.institution === institution : true;
        const matchesCourse = course ? project.course === course : true;
  
        return matchesSearchQuery && matchesCategory && matchesInstitution && matchesCourse;
      });
  
      setFilteredProjects(filteredResults);
    } else {
      setFilteredProjects([]);  // Clear the filtered results when search query is empty
    }
  }, [searchQuery, category, institution, course, projects]);
  

  const handleSearch = () => {
    // You can perform additional search operations if needed
    console.log('Search query:', searchQuery);
    console.log('Category:', category);
    console.log('Institution:', institution);
    console.log('Course:', course);
    console.log('Filtered projects:', filteredProjects);
  };

  return (
    <>
    <NavBar/>
    <Grid container spacing={2} justifyContent="center" alignItems="center"
    paddingTop="30px">
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Autocomplete
          fullWidth
          freeSolo
          disableClearable
          options={projects.map((project) => project.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search projects"
              variant="outlined"
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{ ...params.InputProps, type: 'search' }}
              sx={{ display:'inline-block' }}
            />
          )}
        />
        <Button
          
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
          sx={{ borderRadius: '8px', height: '100%', ml: 1,marginTop:'10px' }}
        >
          Search
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="category-label">Tech Stacks</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Category1">Category1</MenuItem>
            <MenuItem value="Category2">Category2</MenuItem>
            {/* Add more categories as needed */}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200, ml: 2 }}>
          <InputLabel id="institution-label">Institution</InputLabel>
          <Select
            labelId="institution-label"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            label="Institution"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Institution1">Institution1</MenuItem>
            <MenuItem value="Institution2">Institution2</MenuItem>
            {/* Add more institutions as needed */}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200, ml: 2 }}>
          <InputLabel id="course-label">Course</InputLabel>
          <Select
            labelId="course-label"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            label="Course"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Course1">Course1</MenuItem>
            <MenuItem value="Course2">Course2</MenuItem>
            {/* Add more courses as needed */}
          </Select>
        </FormControl>
      </Grid>
      {/* Render filtered projects */}
      {filteredProjects.map(project => (
        <Grid item xs={10} >
          
         <MainProjectCard
         id={project.projectDetailsCode}
         title={project.title}
         description={project.description} // Make sure the property names match what's in your data
         teamMembers={project.teamMembers} // Ensure these links are provided in your data or handled as optional
         
         date={formatDate(project.createTime)}
         likes="3"
         bookmarks="9"
         citations="10" />
        </Grid>
      ))}
    </Grid>
    <Recommendation/>
    </>
  );
};

export default Home;
