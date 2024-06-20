import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";

import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";
import { saveLocalStorage } from "src/funAuth/localStorage";

import Swal from "sweetalert2";
import { Eye as IconEye } from "tabler-icons-react";

const AuthLogin = ({ title, subtitle, subtext }) => {
  // SweetAlert2("Good job!", "You clicked the button!", "success");
  // swal({
  //   title: "Deleted!",
  //   text: "Your row has been deleted.",
  //   type: "success",
  //   timer: 3000
  //   });
  //   function () {
  //      location.reload(true);
  //      tr.hide();
  //   };
  const [email, setEmail] = useState("John@gmail.com");
  const [password, setPassword] = useState("123");

  const onChangeUsername = (event) => {
    console.log(event.tar);
  };
  const handleEmail = (event) => {
    const value = event.currentTarget.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.currentTarget.value;
    setPassword(value);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const checkLogin = (event) => {
    event.preventDefault();
    saveLocalStorage("loginStatus", true);
    navigate("/");
    // fetch("http://localhost:3333/users/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },

    //   //make sure to serialize your JSON body
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(JSON.stringify(result));
    //     if (result.message === "SUCCESS") {
    //       saveLocalStorage("loginStatus", true);
    //       saveLocalStorage("loginData", result);
    //       saveLocalStorage("access_token", result.access_token);
    //       saveLocalStorage("refresh_token", result.refresh_token);
    //       saveLocalStorage("user", result.user);
    //       Swal(
    //         {
    //           title: "Good job!!",
    //           text: "Login success.",
    //           icon: "success",
    //           timer: 1000,
    //           closeOnClickOutside: false,
    //         }
    //       );
    //       navigate("/");
    //     } else {
    //       Swal({
    //         title: "Bad job!",
    //         text: "Please check your login information.",
    //         icon: "error",
    //         timer: 2000,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //   Swal("Bad job!", "Please check your login information.", "error",{timer:2000});
    //   });
  };
  return (
    <>
      {title ? (
        <Typography variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Typography variant="h3" mb={1}>
        Wellcome to ...
      </Typography>
      <Typography variant="h4" mb={1}>
        ลงทะเบียนสำหรับผู้ใช้งานใหม่
      </Typography>
      {/* <Typography fontWeight="100" variant="h4_2" mb={1}>
        ลงทะเบียนสำหรับผู้ใช้งานใหม่
      </Typography> */}
      <Box>
        {"ยังไม่มีบัญชี? "}
        <Link to="/register-customer/page">
          กรอกแบบฟอร์มเพื่อดำเนินการลงทะเบียนเป็นสมาชิก
        </Link>
      </Box>
      <form onSubmit={checkLogin}>
        <Stack>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
            >
              Email address
            </Typography>
            <TextField 
              id="email"
              variant="outlined"
              value={email}
              placeholder="Email*"
              onChange={handleEmail}
              fullWidth
            />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              defaultValue={password}
              // value={password}
              placeholder="Password*"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Stack>
        <Box my={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <div>Forgot Password ?</div>
        </Box>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            // component={Link}
            // to="/"
            type="submit"
            // onClick={checkLogin}
          >
            Login
          </Button>
        </Box>
        {subtitle}
      </form>
    </>
  );
};

export default AuthLogin;
