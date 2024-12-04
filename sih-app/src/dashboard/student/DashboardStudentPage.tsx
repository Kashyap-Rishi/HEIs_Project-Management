
import React from 'react';
import DashboardStudentLayout from './DashboardStudentLayout';

interface LayoutWrapperProps {
  username: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ username, children }) => {
  return (
    <DashboardStudentLayout username={username}>
      {children}
    </DashboardStudentLayout>
  );
};

export default LayoutWrapper;

