"use client";
import React, { useState } from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Card, CardContent, Button, Popover, TextField, Box } from '@mui/material';
import LayoutWrapper from '@/dashboard/institute/DashboardinstitutePage';
import { InstituteDataProvider, InstituteDataContext } from '@/context/data/institute/InstituteContext';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useRouter } from 'next/navigation';
type Params = {
  params: {
   
    username: string;
  };
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Project code is required'),
  description: Yup.string().required('Project title is required'),
  courseCode: Yup.string().required('Evaluation criteria is required'),
  courseCredit: Yup.string().required('Submission guidelines is required'),
});

const enrollValidationSchema = Yup.object().shape({
    professorId: Yup.string().required('Professor ID is required'),
    studentId: Yup.string().required('Student ID is required'),
    courseId: Yup.string().required('Course ID is required'),
  });

const CourseDetailsPage = ({ params: {  username } }: Params) => {
const router=useRouter();




  
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [professorError, setProfessorError] = useState<string | null>(null);

  const handleProfessorError = (error: string) => {
    setProfessorError(error);
    setTimeout(() => {
      setProfessorError(null);
    }, 5000); // Clear the error message after 5 seconds
  };

  return (
    <InstituteDataProvider username={username}>
    <InstituteDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
console.log(data);
          const { institute } = data;
          const { courses} = institute;
console.log(institute.instituteCode)
          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4" gutterBottom>Courses</Typography>
                  <Button variant="outlined" color="primary" onClick={handleClick}>
                    Add Course
                  </Button>
                </Box>
                <Divider />
             

           
                <Grid container spacing={2} sx={{marginTop:'10px'}}>
                  {courses.map((course: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}
                                    
                    >
                      <Card sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1)', // Add slight shadow on hover
                      },
                    }}  >
                        <CardContent>
                          <Typography variant="h6" gutterBottom>{course.name}</Typography>
                          <Typography variant="body2" color="textSecondary">Course Code: {(course.courseCode)}</Typography>
                          <Typography variant="body2" color="textSecondary">Course Credit: {(course.courseCredit)}</Typography>
                          <Typography variant="body2" color="textSecondary">Course Description: {course.description}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div style={{ padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>Add Course</Typography>
                    <Formik
  initialValues={{
    name: '',
    description: '',
    courseCode: '',
    courseCredit: '',
    code:institute.instituteCode
  }}
  validationSchema={validationSchema}
  onSubmit={(values, actions) => {
  

      const formData = { ...values };
   
      axios.post('http://localhost:8000/api/course/register',formData )
      .then(response => {
        if (!response.data.projectTopic || !response.data.projectTopic.projectTopicId) {
          throw new Error('Failed to create project topic');
        }
        console.log('Project topic created successfully');
        handleClose();
      })
      .catch(error => {
        console.error('Error creating project topic:', error);
        actions.setSubmitting(false);
      });

  }}
>
  {({ errors, touched }) => (
    <Form>
      <Field name="name" as={TextField} label="Name" fullWidth variant="outlined" margin="normal" helperText={touched.name && errors.name} error={touched.name && Boolean(errors.name)} />
      <Field name="description" as={TextField} label="Description" fullWidth variant="outlined" margin="normal" helperText={touched.description && errors.description} error={touched.description && Boolean(errors.description)} />
      <Field name="courseCode" as={TextField} label="Course Code" fullWidth variant="outlined" margin="normal" helperText={touched.courseCode && errors.courseCode} error={touched.courseCode && Boolean(errors.courseCode)} />
      <Field name="courseCredit" as={TextField} label="Course Credit" fullWidth variant="outlined" margin="normal" helperText={touched.courseCredit && errors.courseCredit} error={touched.courseCredit && Boolean(errors.courseCredit)} />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>Submit</Button>
    </Form>
  )}
</Formik>

                  </div>
                </Popover>
              </Paper>

               <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
 <Typography variant="h6" gutterBottom>Enroll Professor</Typography>
 <Formik
    initialValues={{ professorId: '', courseId: '' }}
  
    onSubmit={(values, actions) => {
      axios.put(`http://localhost:8000/api/course/${values.courseId}/enroll-professor/${values.professorId}`)
        .then(response => {
          console.log('Professor enrolled successfully');
          actions.resetForm();
        })
        .catch(error => {
          console.error('Error enrolling professor:', error.response.data);
          handleProfessorError(error.response.data.message);
          actions.setSubmitting(false);
        });
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field as={TextField} name="courseId" label="Course ID" fullWidth variant="outlined" margin="normal" error={touched.courseId && Boolean(errors.courseId)} helperText={touched.courseId && errors.courseId} />
        <Field as={TextField} name="professorId" label="Professor ID" fullWidth variant="outlined" margin="normal" error={touched.professorId && Boolean(errors.professorId)} helperText={touched.professorId && errors.professorId} />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>Enroll Professor</Button>
        {professorError && (
          <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>{professorError}</Typography>
        )}
      </Form>
    )}
  </Formik>
</Paper>

<Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
<Typography variant="h6" gutterBottom>Enroll Student</Typography>
<Formik
  initialValues={{ studentId: '', courseId: '' }}
  // validationSchema={enrollValidationSchema}
  onSubmit={(values, actions) => {
    axios.put(`http://localhost:8000/api/course/${values.courseId}/enroll-student/${values.studentId}`)
      .then(response => {
        console.log('Student enrolled successfully');
        actions.resetForm();
      })
      .catch(error => {
        console.error('Error enrolling student:', error);
        actions.setSubmitting(false);
      });
  }}
>
  {({ errors, touched }) => (
    <Form>
      <Field as={TextField} name="courseId" label="Course Code" fullWidth variant="outlined" margin="normal" error={touched.courseId && Boolean(errors.courseId)} helperText={touched.courseId && errors.courseId} />
      <Field as={TextField} name="studentId" label="Student Roll No" fullWidth variant="outlined" margin="normal" error={touched.studentId && Boolean(errors.studentId)} helperText={touched.studentId && errors.studentId} />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>Enroll Student</Button>
    </Form>
  )}
</Formik>
</Paper>
              
            </LayoutWrapper>
          );
        }}
      </InstituteDataContext.Consumer>
    </InstituteDataProvider>
  );
};

export default CourseDetailsPage;





