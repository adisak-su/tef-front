import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const Register = () => {
  return (
    <PageContainer title="register Page" description="this is register page">

      <DashboardCard title="register Page">
        <Typography>This is a register page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Register;
