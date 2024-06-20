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
} from "@mui/material";

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

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const clickLogout = () => {
    saveLocalStorage("loginStatus", false);
    navigate("/login");
  };

  let name = "TEF System";

  return (
    <Box
      sx={{
        border: "1px solid #B9B7B7",
        borderRadius: "10px",
        marginTop: "8px",
        backgroundColor: "white",
      }}
      // onClick={handleClick2}
    >
      <Box
        // size="large"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
          padding: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center"
        }}
        onClick={handleClick2}
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
        <Typography fontWeight="500" variant="h5">
          {name}
        </Typography>
      </Box>
      {/* <IconButton
        size="large"
        // aria-label="show 11 new notifications"
        // color="inherit"
        // aria-controls="msgs-menu"
        // aria-haspopup="true"
        // sx={{
        //   ...(typeof anchorEl2 === "object" && {
        //     color: "primary.main",
        //   }),padding: "8px"
        // }}
        onClick={handleClick2}
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
        <Typography fontWeight="500" variant="h5">
        {name}
      </Typography>
      </IconButton> */}

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
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
