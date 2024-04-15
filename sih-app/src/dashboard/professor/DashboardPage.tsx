
import React from 'react';
import DashboardLayout from './DashboardLayout';

interface LayoutWrapperProps {
  username: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ username, children }) => {
  return (
    <DashboardLayout username={username}>
      {children}
    </DashboardLayout>
  );
};

export default LayoutWrapper;

