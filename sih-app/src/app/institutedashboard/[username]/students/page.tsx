"use client";
import {useState,useEffect} from 'react';
import { CircularProgress, Typography, Grid, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import LayoutWrapper from '@/dashboard/institute/DashboardinstitutePage';
import { InstituteDataProvider, InstituteDataContext } from '@/context/data/institute/InstituteContext';
import axios from 'axios';

type Params = {
  params: {
    username: string;
  };
};

const ProfessorAuthorizedPage = ({ params: { username } }: Params) => {



  const handleRegister = async (rollNo: string) => {
    try {
      await axios.put(`http://localhost:8000/api/student/activate/${rollNo}`);  
      window.location.reload(); 
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  const handleUnregister = async (rollNo: string) => {
    try {
      await axios.put(`http://localhost:8000/api/student/deactivate/${rollNo}`);
      window.location.reload(); 
    } catch (error) {
      console.error('Error unregistering student:', error);
    }
  };

  return (
    <InstituteDataProvider username={username}>
      <InstituteDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
          const { institute } = data;
          const { students } = institute;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Student List</Typography>
                <Divider />
                <Grid container spacing={3} mt={3}>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Roll Number</TableCell>
                            <TableCell>Branch</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {students.map((student: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">{index + 1}</TableCell>
                              <TableCell>{student.firstName}</TableCell>
                              <TableCell>{student.studentRollNo}</TableCell>
                              <TableCell>{student.branch}</TableCell>
                              <TableCell>
                                {student.isActivated ? (
                                  <Button variant="contained" color="secondary" onClick={() => handleUnregister(student.studentRollNo)}>Unregister</Button>
                                ) : (
                                  <Button variant="contained" color="primary" onClick={() => handleRegister(student.studentRollNo)}>Register</Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell colSpan={5}>Total Students: {students.length}</TableCell>
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

export default ProfessorAuthorizedPage;
