"use client";


import { CircularProgress, Typography, Grid, Paper, Divider, ListItem, ListItemText, List, Button, Box, Link } from '@mui/material';
import LayoutWrapper from '@/dashboard/student/DashboardStudentPage';
import { StudentDataProvider,StudentDataContext } from '@/context/data/student/StudentContext'; 
import { useRouter } from 'next/navigation';


type Params = {
  params: {
    username: string;
  };
};

const CoursePage = ({ params: { username } }: Params) => {
  const router = useRouter();

  const handleViewCourse = (courseCode: string) => {
    router.push(`/studentdashboard/${username}/courses/${courseCode}`);
  };

  return (
    <StudentDataProvider username={username}>
      <StudentDataContext.Consumer>
        {(dataContextValue) => {
          const { data } = dataContextValue;
          if (!data) {
            return <CircularProgress />;
          }
console.log(data);
          const { student } = data;
          const { courses } = student;

          return (
            <LayoutWrapper username={username}>
              <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                <Typography variant="h4" gutterBottom>Enrolled Courses</Typography>
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
      </StudentDataContext.Consumer>
    </StudentDataProvider>
  );
};

export default CoursePage;
