
import React from 'react';
import DashboardInstituteLayout from './DashboardInstituteLayout';

interface LayoutWrapperProps {
  username: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ username, children }) => {
  return (
    <DashboardInstituteLayout username={username}>
      {children}
    </DashboardInstituteLayout>
  );
};

export default LayoutWrapper;

