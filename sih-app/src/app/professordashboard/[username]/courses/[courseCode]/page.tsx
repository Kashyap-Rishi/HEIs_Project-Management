"use client";
import React, { useState } from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Card, CardContent, Button, Popover, TextField, Box } from '@mui/material';
import LayoutWrapper from '@/dashboard/professor/DashboardPage';
import { CourseDataContext, CourseDataProvider } from '@/context/data/course/CourseContext';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { format, parse } from 'date-fns';
import { useRouter } from 'next/navigation';
type Params = {
  params: {
    courseCode: string;
    username: string;
  };
};

const validationSchema = Yup.object().shape({
  projectCode: Yup.string().required('Project code is required'),
  projectTitle: Yup.string().required('Project title is required'),
  deadline: Yup.date().required('Deadline is required'),
  evaluationCriteria: Yup.string().required('Evaluation criteria is required'),
  submissionGuidelines: Yup.string().required('Submission guidelines is required'),
});

const CourseDetailsPage = ({ params: { courseCode, username } }: Params) => {
const router=useRouter();

const handleProjectBoxClick = (projectCode:String) => {
  const projectVerifiedUrl = `/professordashboard/${username}/courses/${courseCode}/${projectCode}/unverified`;
  router.push(projectVerifiedUrl);
};

  
  const convertToISOFormat = (inputDate: string) => {

    const parsedDate = parse(inputDate, 'yyyy-MM-dd\'T\'HH:mm', new Date());
    const ISODateString = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    return ISODateString;
  };
  
  
  
  
  
  
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <CourseDataProvider courseCode={courseCode}>
      <CourseDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const { course } = data;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4" gutterBottom>{course.name} - {course.courseCode}</Typography>
                  <Button variant="outlined" color="primary" onClick={handleClick}>
                    Add Project
                  </Button>
                </Box>
                <Divider />
                <Typography variant="body1" gutterBottom>Description: {course.description}</Typography>
                <Typography variant="body1" gutterBottom>Credit: {course.courseCredit}</Typography>

                <Typography variant="h6" gutterBottom mt={3}>Assigned Projects:</Typography>
                <Grid container spacing={2}>
                  {course.projectTopics.map((project: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleProjectBoxClick(project.projectCode)}
                                    
                    >
                      <Card sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1)', // Add slight shadow on hover
                      },
                    }}  >
                        <CardContent>
                          <Typography variant="h6" gutterBottom>{project.projectTitle}</Typography>
                          <Typography variant="body2" color="textSecondary">Deadline: {new Date(project.deadline).toDateString()}</Typography>
                          <Typography variant="body2" color="textSecondary">Evaluation Criteria: {project.evaluationCriteria}</Typography>
                          <Typography variant="body2" color="textSecondary">Submission Guidelines: {project.submissionGuidelines}</Typography>
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
                    <Typography variant="h6" gutterBottom>Add Project</Typography>
                    <Formik
  initialValues={{
    projectCode: '',
    projectTitle: '',
    deadline: '', // This will store the formatted date string
    evaluationCriteria: '',
    submissionGuidelines: '',
  }}
  validationSchema={validationSchema}
  onSubmit={(values, actions) => {
    // Convert the selected date to ISO format
    const ISODate = convertToISOFormat(values.deadline);
    // Check if the conversion was successful
    if (ISODate) {
      // Update the form values with the converted ISO date
      const updatedValues = { ...values, deadline: ISODate };
      const { courseId, professors } = course;
      const professorId = professors.length > 0 ? professors[0].professorId : '';
      const formData = { ...updatedValues, professorId, courseId };
      // Proceed with form submission using the updated form data
      axios.post('http://localhost:8000/api/project/createTopic', formData)
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
    } else {
      console.error('Invalid date format'); // Log an error if date format is invalid
    }
  }}
>
  {({ errors, touched }) => (
    <Form>
      <Field name="projectCode" as={TextField} label="Project Code" fullWidth variant="outlined" margin="normal" helperText={touched.projectCode && errors.projectCode} error={touched.projectCode && Boolean(errors.projectCode)} />
      <Field name="projectTitle" as={TextField} label="Project Title" fullWidth variant="outlined" margin="normal" helperText={touched.projectTitle && errors.projectTitle} error={touched.projectTitle && Boolean(errors.projectTitle)} />
      <Field
        name="deadline"
        as={TextField}
        label="Deadline"
        fullWidth
        variant="outlined"
        margin="normal"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
      />
      <Field name="evaluationCriteria" as={TextField} label="Evaluation Criteria" fullWidth variant="outlined" margin="normal" helperText={touched.evaluationCriteria && errors.evaluationCriteria} error={touched.evaluationCriteria && Boolean(errors.evaluationCriteria)} />
      <Field name="submissionGuidelines" as={TextField} label="Submission Guidelines" fullWidth variant="outlined" margin="normal" helperText={touched.submissionGuidelines && errors.submissionGuidelines} error={touched.submissionGuidelines && Boolean(errors.submissionGuidelines)} />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>Submit</Button>
    </Form>
  )}
</Formik>

                  </div>
                </Popover>
              </Paper>
            </LayoutWrapper>
          );
        }}
      </CourseDataContext.Consumer>
    </CourseDataProvider>
  );
};

export default CourseDetailsPage;

