"use client";
import React, { useState } from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Card, CardContent, Button, Popover, TextField, Box } from '@mui/material';
import LayoutWrapper from '@/dashboard/student/DashboardStudentPage';
import { CourseDataContext, CourseDataProvider } from '@/context/data/course/CourseContext';
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    courseCode: string;
    username: string;
  };
};

const CourseDetailsPage = ({ params: { courseCode, username } }: Params) => {
const router=useRouter();

const handleProjectBoxClick = (projectCode:String) => {
  const projectVerifiedUrl = `/projectSubmission/${projectCode}`;
  router.push(projectVerifiedUrl);
};


  return (
    <CourseDataProvider courseCode={courseCode}>
      <CourseDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const { course } = data;
          console.log(course)
          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4" gutterBottom>{course.name} - {course.courseCode}</Typography>
           

                </Box>
                <Divider />
                <Typography variant="body1" gutterBottom>Description: {course.description}</Typography>
                <Typography variant="body1" gutterBottom>Credit: {course.courseCredit}</Typography>

                <Typography variant="h6" gutterBottom mt={3}>Project Assignments:</Typography>
                <Grid container spacing={2}>
                  {
               course.projectTopics
               .filter((project:any) => !project.submissions.includes(username))
               .map((project:any, index:any) => (
                 <Grid item xs={12} sm={6} md={4} key={index} >
                   <Card
                     sx={{
                       '&:hover': {
                         cursor: 'pointer',
                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1)', 
                       },
                     }}
                   >
           
          
                        <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                          <Typography variant="h6" gutterBottom>{project.projectTitle}</Typography>
                          <Button variant="outlined" color="primary" onClick={() => handleProjectBoxClick(project.projectCode)}>
                    Submit
                  </Button>
                  </Box>
                          <Typography variant="body2" color="textSecondary">Deadline: {new Date(project.deadline).toDateString()}</Typography>
                          <Typography variant="body2" color="textSecondary">Evaluation Criteria: {project.evaluationCriteria}</Typography>
                          <Typography variant="body2" color="textSecondary">Submission Guidelines: {project.submissionGuidelines}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </LayoutWrapper>
          );
        }}
      </CourseDataContext.Consumer>
    </CourseDataProvider>
  );
};

export default CourseDetailsPage;
