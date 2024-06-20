import React, { useRef, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const Dashboard = () => {

  return (
    <PageContainer title="Dashboard Page" description="this is Dashboard page">
      <DashboardCard title="Dashboard Page">
        <Typography>This is a dashboard page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Dashboard;
