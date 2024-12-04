"use client";


import { CircularProgress, Typography, Grid, Paper, Divider, ListItem, ListItemText, List, Button, Box, Link } from '@mui/material';
import { DataContext } from '@/context/data/professor/ProfessorContext';
import LayoutWrapper from '@/dashboard/professor/DashboardPage';
import React, { useContext } from 'react';
import { ProfessorDataProvider } from '@/context/data/professor/ProfessorContext'; 
import { useRouter } from 'next/navigation';


// const isLoggedIn = useAuth();
// const navigate = useNavigate();
// if (!isLoggedIn) {
//   navigate('/login');
 
// }
type Params = {
  params: {
    username: string;
  };
};

const CoursePage = ({ params: { username } }: Params) => {
  const router = useRouter();

  const handleViewCourse = (courseCode: string) => {
    router.push(`/professordashboard/${username}/courses/${courseCode}`);
  };

  return (
    <ProfessorDataProvider username={username}>
      <DataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const { professor } = data;
          const { courses } = professor;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Courses</Typography>
                <Divider />
                <Grid container spacing={2}>
                  {courses.map((course:any, index:number) => (
                    <Grid item xs={12} key={index}>
                      <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1" gutterBottom>
                            <strong>Course Code:</strong> {course.courseCode}
                          </Typography>
                          <Typography variant="body1">
                            <strong>Course Name:</strong> {course.name}
                          </Typography>
                        </Box>
                        <Button variant="contained" color="primary" onClick={() => handleViewCourse(course.courseCode)}>
                          View
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </LayoutWrapper>
          );
        }}
      </DataContext.Consumer>
    </ProfessorDataProvider>
  );
};

export default CoursePage;
