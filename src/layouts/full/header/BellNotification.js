import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Badge, Button } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { saveLocalStorage, getLocalStorage } from "src/funAuth/localStorage";
import { shadows } from "@mui/system";
const BellNotification = () => {
  const navigate = useNavigate();

  const clickNotification = () => {
    // saveLocalStorage("loginStatus", false);
    // navigate("/login");
    alert("clickNotification");
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          bgcolor: "#fff",
          color: "grey.800",
          borderRadius: 2,
        }}
        onClick={clickNotification}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="primary"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
    </>
  );
};

export default BellNotification;
