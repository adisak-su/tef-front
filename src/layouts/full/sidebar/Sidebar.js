import { useMediaQuery, Box, Drawer, Button } from "@mui/material";
import Logo from "../shared/logo/Logo";
import LogoText from "../shared/logo/LogoText";
import SidebarItems from "./SidebarItems";
import { saveLocalStorage } from "src/funAuth/localStorage";
import { useNavigate } from "react-router-dom";
// import { Upgrade } from "./Updrade";

// import Logo from "src/assets/images/logos/TEF_Logo.png";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const clickLogout = () => {
    saveLocalStorage("loginStatus", false);
    navigate("/login");
  };

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3}>
              <LogoText />
              {/* <Logo width="50px"/> */}
            </Box>
            <Box>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
              {/* <Upgrade /> */}
              <Box mt={3}>
                {/* ------------------------------------------- */}
                {/* Logout */}
                {/* ------------------------------------------- */}
                <Button
                  variant="outlined"
                  color="danger"
                  fullWidth
                  onClick={clickLogout}
                >
                  Logout Root
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box p={2}>
        {/* <Logo /> */}
        <LogoText />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
      {/* <Upgrade /> */}
    </Drawer>
  );
};

export default Sidebar;
