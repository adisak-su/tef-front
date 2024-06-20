import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Paper } from '@mui/material';
import { Box } from 'tabler-icons-react';
import { Outlet } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

const BoxShadow = () => {
    return (
        <Item elevation="4">
        <Outlet />
        </Item>
    )
}

export default BoxShadow;
