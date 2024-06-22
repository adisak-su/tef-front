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
  const handleClose = (id, event) => {
    alert(id)
    setAnchorEl(null);
  };

  const clickLogout = () => {
    saveLocalStorage("loginStatus", false);
    navigate("/login");
  };

  const notiItems = [
    {
      id: 1,
      message: "Frozen yoghurt",
    },
    {
      id: 2,
      message: "Ice cream sandwich",
    },
    {
      id: 3,
      message: "Gingerbread",
    },
  ];
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
        <Badge badgeContent={notiItems.length} color="error">
            <NotificationsIcon color="primary"/>
          </Badge>
      </Box>

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(e) => handleClose(-1, e)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        {notiItems.map((item) => (
            <MenuItem onClick={(e) => handleClose(item.id, e)}>
              {item.message}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default Profile;
