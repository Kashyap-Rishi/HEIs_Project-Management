"use client";
import './addprojects.css'
import prisma from '../lib/connect';
import React, { useState } from 'react';


const AddProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    studentName: '',
    rollNo: '',
    dateOfUploading: '',
    datasets: '',
    status:'unverified',
    results: '',
    methods: '',
    languages: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const languagesArray = formData.languages.split(',');
      const dateOfUploading = new Date(formData.dateOfUploading).toISOString();
      const response = await fetch("api/allprojects",{
        method:"POST",

        body:JSON.stringify({
          ...formData,
          dateOfUploading: dateOfUploading,
          languages: languagesArray
        }),
      })

const data= await response.json();
console.log(data);
      }
    
   catch (error) {
    console.error('Error occurred while registering:', error);
   }
    
  };



  return (
    <div className="container">
      <h1>Upload Project</h1>
      <hr className="ad-hr"/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollNo">Student Roll Number:</label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfUploading">Date of Uploading:</label>
          <input
            type="date"
            id="dateOfUploading"
            name="dateOfUploading"
            value={formData.dateOfUploading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="datasets">Datasets:</label>
          <textarea
            id="datasets"
            name="datasets"
            value={formData.datasets}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="results">Results:</label>
          <textarea
            id="results"
            name="results"
            value={formData.results}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="methods">Methods:</label>
          <textarea
            id="methods"
            name="methods"
            value={formData.methods}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="languages">Languages:</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProject;


