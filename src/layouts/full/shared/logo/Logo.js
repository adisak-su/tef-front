import { Link } from 'react-router-dom';
// import { ReactComponent as LogoDark } from 'src/assets/images/logos/TEF_Logo.png';
import logo  from 'src/assets/images/logos/TEF_Logo.png';

import { Box, styled } from '@mui/material';
// import { Box } from 'tabler-icons-react';


const LinkStyled = styled(Link)(() => ({
  // height: '100px',
  // width: '100px',
  // overflow: 'hidden',
  // display: 'flex',
  // // justifyContent: "center",
  // alignItems: "center"
}));

const Logo = (props) => {
  let width = props.width?props.width:"100px"

  console.log(width)
  return (
    <Box sx={{width:{width},display: 'flex',alignItems: "center"}}>
    <LinkStyled to="/">
      <img src={logo} alt="Logo" width="100%"/>
      {/* <Logo_TEF height={70} /> */}
    </LinkStyled>
    </Box>
  )
};

export default Logo;
