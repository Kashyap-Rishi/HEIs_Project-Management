"use client";

import { CircularProgress, Typography, Grid, Paper, Divider, ListItem, ListItemText, List } from '@mui/material';
import { DataContext } from '@/context/data/professor/ProfessorContext';
import LayoutWrapper from '@/dashboard/professor/DashboardPage';
import React, { useContext } from 'react';
import { ProfessorDataProvider } from '@/context/data/professor/ProfessorContext'; 

type Params = {
  params: {
    username: string;
  };
};

const ProfilePage = ({ params: { username } }: Params) => {
  return (
    <ProfessorDataProvider username={username}>
      <DataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
console.log(data);
          const { professor } = data;
          const { firstName, lastName, email, phoneNumber, professorRollNo, courses } = professor;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Welcome, {firstName}!</Typography>
                <Divider />
                <Grid container spacing={3} mt={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Personal Information:</Typography>
                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary={`First Name: ${firstName}`} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary={`Last Name: ${lastName}`} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary={`Email: ${email}`} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary={`Phone Number: ${phoneNumber}`} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary={`Professor Roll No: ${professorRollNo}`} />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Courses Enrolled:</Typography>
                    <List>
                      {courses.map((course:any, index:number) => (
                        <ListItem key={index} disablePadding>
                          <ListItemText primary={`Course ${index + 1}: ${course.name}`} />
                        </ListItem>
                      ))}
                      <ListItem disablePadding>
                        <ListItemText primary={`Total Courses: ${courses.length}`} />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </LayoutWrapper>
          );
        }}
      </DataContext.Consumer>
    </ProfessorDataProvider>
  );
};

export default ProfilePage;
