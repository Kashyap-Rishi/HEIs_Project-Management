"use client";
import React from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LayoutWrapper from '@/dashboard/institute/DashboardinstitutePage';
import { InstituteDataProvider, InstituteDataContext } from '@/context/data/institute/InstituteContext';

type Params = {
  params: {
    username: string;
  };
};

const StudentProfilePage = ({ params: { username } }: Params) => {
  return (
    <InstituteDataProvider username={username}>
      <InstituteDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
          const { institute } = data;
          const { professors, students, courses } = institute;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Welcome, {institute.name}!</Typography>
                <Divider />
                <Grid container spacing={3} mt={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Personal Information:</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row">Institute Address:</TableCell>
                            <TableCell>{institute.address}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Website Link:</TableCell>
                            <TableCell>{institute.website}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Email:</TableCell>
                            <TableCell>{institute.email}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Phone Number:</TableCell>
                            <TableCell>{institute.phoneNumber}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="th" scope="row">Institute Code:</TableCell>
                            <TableCell>{institute.instituteCode}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Total Courses:</Typography>
                    <TableContainer component={Paper}  >
                      <Table>
                        <TableBody>
                          {courses.map((course: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{index + 1}</TableCell>
                              <TableCell>{course.name}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell component="th" scope="row">Total Courses:</TableCell>
                            <TableCell>{courses.length}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Typography variant="h6" gutterBottom sx={{paddingTop:'50px'}}>Total Professors:</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          {professors.map((professor: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{index + 1}</TableCell>
                              <TableCell>{professor.firstName}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell component="th" scope="row">Total Professors:</TableCell>
                            <TableCell>{professors.length}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Typography variant="h6" gutterBottom sx={{paddingTop:'50px'}}>Total Students:</Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableBody>
                          {students.map((student: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{index + 1}</TableCell>
                              <TableCell>{student.firstName}</TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell component="th" scope="row">Total Students:</TableCell>
                            <TableCell>{students.length}</TableCell>
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
      </InstituteDataContext.Consumer>
    </InstituteDataProvider>
  );
};

export default StudentProfilePage;
