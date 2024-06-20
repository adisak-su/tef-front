import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import logo from "src/assets/images/logos/TEF_Logo.png";
import logoText from "src/assets/images/logos/TEF_Logo_text.png";
import AuthLogin from "./auth/AuthLogin";
// import Logo from "src/layouts/full/shared/logo/Logo";
// import LogoText from "src/layouts/full/shared/logo/LogoText";

const Login2 = () => {
  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      // background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
      <Box
        // sx={{
        //   position: "relative",
        //   content: '""',
        //   background: "linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)",
        //   animation: "gradient 15s ease infinite",
        //   position: "absolute",
        //   height: "100vh",
        //   width: "100vw",
        // }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            xl={6}
            display={{ xs: "none", lg: "block" }}
          >
            <div style={{ margin: "20px" }}>
              <img src={logo} alt="logo" width={100} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <div style={{ marginBottom: "20px" }}>
                  <img src={logoText} alt="logoText" width={"100%"} />
                </div>
              </Box>
              <AuthLogin
                // title={"ABC"}
                // subtext={<></>}
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  ></Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
