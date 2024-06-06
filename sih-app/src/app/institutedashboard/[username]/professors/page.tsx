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

const ProfessorAuthorizedPage = ({ params: { username } }: Params) => {
  return (
    <InstituteDataProvider username={username}>
      <InstituteDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
          const { institute } = data;
          const { professors } = institute;
          console.log(professors)
          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Professors</Typography>
                <Divider />
                <Grid container spacing={3} mt={3}>
                  <Grid item xs={12} md={6}>
                
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
