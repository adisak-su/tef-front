import { Link } from "react-router-dom";
import logo from "src/assets/images/logos/TEF_Logo_text.png";

import { Box, styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  // height: "100px",
  // width: "200px",
  // overflow: "hidden",
  // display: "block",
}));

const LogoText = (props) => {
  let width = props.width ? props.width : "200px";
  return (
    <Box sx={{ width: { width }, display: "flex", alignItems: "center" }}>
      <LinkStyled to="/">
        <img src={logo} alt="Logo" width="100%" />
        {/* <Logo_TEF height={70} /> */}
      </LinkStyled>
    </Box>
    // <LinkStyled to="/">
    //   <img src={logo} alt="Logo" width={200}/>;
    //   {/* <Logo_Text width={200} /> */}
    // </LinkStyled>
  );
};

export default LogoText;
