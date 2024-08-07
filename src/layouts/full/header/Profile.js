import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Badge,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

// import { IconListCheck, IconMail, IconUser, IconBellRinging } from '@tabler/icons';
import {
  ListCheck as IconListCheck,
  Mail as IconMail,
  User as IconUser,
} from "tabler-icons-react";

import ProfileImg from "src/assets/images/profile/user-1.jpg";

import { saveLocalStorage } from "src/funAuth/localStorage";

const Profile = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLogout = () => {
    saveLocalStorage("loginStatus", false);
    navigate("/login");
  };

  let name = "TEF System";

  return (
    <Box
      sx={{
        marginTop: "8px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: 3,
          padding: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <Avatar
          src={ProfileImg}
          alt={ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
        <Box width={"10px"}></Box>
        <Typography fontWeight="500" variant="h5" sx={{ cursor: "pointer" }}>
          {name}
        </Typography>
      </Box>

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
        >
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem
        onClick={handleClose}
        >
          Abc
        </MenuItem>
        <Box mt={1} py={1} px={2}>
          <Button
            variant="outlined"
            color="danger"
            fullWidth
            onClick={clickLogout}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
