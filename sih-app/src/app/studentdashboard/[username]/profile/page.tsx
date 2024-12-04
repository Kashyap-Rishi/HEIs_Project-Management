"use client";

import React from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LayoutWrapper from '@/dashboard/student/DashboardStudentPage';
import { StudentDataProvider, StudentDataContext } from '@/context/data/student/StudentContext';

type Params = {
  params: {
    username: string;
  };
};

const StudentProfilePage = ({ params: { username } }: Params) => {
  return (
    <StudentDataProvider username={username}>
      <StudentDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const { student } = data;
          const { firstName, lastName, email, phoneNumber, studentRollNo, courses } = student;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Welcome, {firstName}!</Typography>
                <Divider />
                <Grid container spacing={3} mt={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Personal Information:</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row">First Name:</TableCell>
                            <TableCell>{firstName}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Last Name:</TableCell>
                            <TableCell>{lastName}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Email:</TableCell>
                            <TableCell>{email}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Phone Number:</TableCell>
                            <TableCell>{phoneNumber}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Student Roll No:</TableCell>
                            <TableCell>{studentRollNo}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Courses Enrolled:</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Course Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {courses.map((course: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{course.name}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell>Total Courses:</TableCell>
                            <TableCell>{courses.length}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </LayoutWrapper>
          );
        }}
      </StudentDataContext.Consumer>
    </StudentDataProvider>
  );
};

export default StudentProfilePage;
