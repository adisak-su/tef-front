import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  MenuItem,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import logo_TEF from "src/assets/images/logos/TEF_Logo.png";
import logo_TEF_Text from "src/assets/images/logos/TEF_Logo_text.png";

import RegisterCustomerTEF from "./RegisterCustomerTEF";
import RegisterCustomerFEI1 from "./RegisterCustomerFEI_Thai";
import RegisterCustomerFEI2 from "./RegisterCustomerFEI_Inter";
import Logo from "src/layouts/full/shared/logo/Logo";

// import { Select } from "tabler-icons-react";

const RegisterCustomer = () => {
  const navigate = useNavigate();

  const clickBackToLogin = () => {
    // saveLocalStorage("loginStatus", false);
    navigate("/");
  };

  const selectNames = [
    {
      value: "TEF",
      name: "Register athletes under the Thailand Equestrian Sports Association (TEF ID)",
    },
    {
      value: "Club",
      name: "Register club under the Thailand Equestrian Sports Association (CLUB ID)",
    },
  ];

  const [registerType, setRegisterType] = useState("0");
  const handleChange = (event) => {
    setRegisterType(event.target.value);
    // alert(event.target.value);
  };
  const [registerGroup, setRegisterGroup] = useState("");
  const handleRegisterGroup = (event) => {
    setRegisterGroup(event.target.value);
    // alert(event.target.value);
  };
  useEffect(() => {
    console.table(selectNames);
  });

  const nextStep = (event) => {
    event.preventDefault();
    // alert(registerGroup)
    switch (registerGroup) {
      case "Club":
        navigate("/register-customer/comming-soon");
        // navigate("/register-customer/tef");
        break;
      case "TEF":
        navigate("/register-customer/fei-thai");
        break;
      case "TFI":
        navigate("/register-customer/fei-inter");
        break;
    }
    // switch (registerGroup) {
    //   case "1":
    //     navigate("/register-customer/tef");
    //     break;
    //   case "2":
    //     navigate("/register-customer/fei-thai");
    //     break;
    //   case "3":
    //     navigate("/register-customer/fei-inter");
    //     break;
    // }
  };

  return (
    <PageContainer
      title="Register Customer"
      description="Register Customer page"
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
          // spacing={0}
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
            <Box mt={2} ml={2}>
              <Logo />
            </Box>

            {/* <div style={{ margin: "20px" }}>
              <img src={logo_TEF} alt="logo_TEF" width={100} />
            </div> */}
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
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "700px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <div style={{ margin: "20px", maxWidth: "50%" }}>
                  <img src={logo_TEF_Text} alt="logo_TEF_Text" width={"100%"} />
                </div>
              </Box>
              {/* <Typography fontWeight="700" variant="h3" mb={1}>
                Wellcome to Register Customer
              </Typography> */}
              <Box mb={5}>
                <FormControl fullWidth>
                  <Typography fontWeight="500" variant="h4" mb={1}>
                    Registration type*
                  </Typography>
                  <Select
                    id="register-type-select"
                    // value={registerType}
                    placeholder="Select an option..."
                    onChange={handleRegisterGroup}
                  >
                    {selectNames.map((item) => (
                      <MenuItem value={item.value}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {/* <Box mb={5}>
                <FormControl>
                  <Typography fontWeight="300" variant="h5" mb={1}>
                    เลือกประเภทที่ต้องการทะเบียน
                  </Typography>
                  <RadioGroup
                    defaultValue="1"
                    name="registerGroup"
                    onChange={handleRegisterGroup}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="แบบฟอร์มลงทะเบียนสโมสร ภายใต้สมาคมกีฬาขี่ม้าแห่งประเทศไทย"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="แบบฟอร์มลงทะเบียนนักกีฬา ภายใต้สมาคมคนกีฬาขี่ม้าแห่งประเทศไทย"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="แบบฟอร์มลงทะเบียนนักกีฬาสำหรับการแข่งขันระดับนานาชาติ"
                    />
                  </RadioGroup>
                </FormControl>
              </Box> */}
              
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={2}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={nextStep}
                  disabled={registerGroup===""}
                >
                  Ok
                </Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
              >
                <Button variant="outlined" fullWidth onClick={clickBackToLogin}>
                  Back to Login
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default RegisterCustomer;
