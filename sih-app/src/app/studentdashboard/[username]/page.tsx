
import LayoutWrapper from '@/dashboard/student/DashboardStudentPage';
import React from 'react';




type Params = {
  params: {
    username: string;
  };
};

const StudentDashboard = ({ params: { username } }: Params) => {


  // Your page content goes here

  return (
    <LayoutWrapper username={username}>
      {/* Your page content goes here */}
      <div>
        <h1>Welcome, {username}!</h1>
        <p>This is your dashboard.</p>
      </div>
    </LayoutWrapper>
  );
};

export default StudentDashboard;