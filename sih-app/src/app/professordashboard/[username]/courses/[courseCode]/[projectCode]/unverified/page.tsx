
"use client";
import React, { useState } from 'react';
import {
  CircularProgress, Typography, Grid, Paper, Divider, Box, Button,
  Select, MenuItem, Pagination, SelectChangeEvent
} from '@mui/material';
import LayoutWrapper from '@/dashboard/professor/DashboardPage';
import { ProjectDataProvider, ProjectDataContext } from '@/context/data/projects/ProjectContext';
import { useRouter } from 'next/navigation';
import ProjCardSI from '@/components/ProjCardSI/ProjCardSI';

type Params = {
  params: {
    username: string;
    projectCode: string;
    courseCode: string;
  };
};

const ProjectPageUnverified = ({ params: { projectCode, username, courseCode } }: Params) => {

  const formatDate = (isoDateString: string) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString(); // Converts to local date string, or use .toLocaleDateString('en-US') for a specific locale
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter();

  return (
    <ProjectDataProvider projectCode={projectCode}>
      <ProjectDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }

          const { projectTopic } = data;
          const unverifiedProjects = projectTopic.projects.filter((projects:any) => projects.projectStatus === 'unverified');
       
          const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
            setCurrentPage(page);
          };

          const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
            setItemsPerPage(event.target.value as number);
            setCurrentPage(1);
          };

          const startIndex = unverifiedProjects.length > 0 ? (currentPage - 1) * itemsPerPage : 0;
const endIndex = Math.min(startIndex + itemsPerPage, unverifiedProjects.length);
          const paginatedProjects = unverifiedProjects.slice(startIndex, endIndex);

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4" gutterBottom>Pending Submissions</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" color="success" onClick={() => router.push(`/professordashboard/${username}/courses/${courseCode}/${projectCode}/verified`)}>
                      Accepted
                    </Button>
                    <Button variant="outlined" color="warning" onClick={() => router.push(`/professordashboard/${username}/courses/${courseCode}/${projectCode}/unverified`)}>
                      Pending
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => router.push(`/professordashboard/${username}/courses/${courseCode}/${projectCode}/rejected`)}>
                      Rejected
                    </Button>
                  </Box>
                </Box>
                <Divider />
                <Grid container spacing={2}>
  {paginatedProjects.map((project: any, index: any) => (
    <Grid item xs={12} key={index} > {/* Adjust grid sizing as needed for responsiveness */}
      <ProjCardSI
        id={project.projectDetailsCode}
        name={project.title}
        description={project.description} // Make sure the property names match what's in your data
        teamMembers={project.teamMembers} // Ensure these links are provided in your data or handled as optional
        
        date={formatDate(project.createTime)}
        likes="3"
        bookmarks="9"
        citations="10"
        statusproject={project.projectStatus}
        statusBackgroundColor="rgba(237, 108, 2, 0.5)" // Ensure you have a logic to determine this color based on status
      />
    </Grid>
  ))}
</Grid>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  {unverifiedProjects.length > 0 && (
    <>
      <Box>
        <Typography variant="body1">Rows per page:</Typography>
        <Select
          value={itemsPerPage}
          onChange={handleChangeRowsPerPage}
          displayEmpty
          inputProps={{ 'aria-label': 'rows per page' }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </Box>
      <Typography variant="body1">
        Showing {startIndex + 1}-{endIndex} of {unverifiedProjects.length}
      </Typography>
      <Pagination
        count={Math.ceil(unverifiedProjects.length / itemsPerPage)}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </>
  )}
  {unverifiedProjects.length === 0 && (
    <Typography variant="body1" sx={{ mx: 'auto' }}>No pending projects to display</Typography>
  )}
</Box>

              </Paper>
            </LayoutWrapper>
          );
        }}
      </ProjectDataContext.Consumer>
    </ProjectDataProvider>
  );
};

export default ProjectPageUnverified;
