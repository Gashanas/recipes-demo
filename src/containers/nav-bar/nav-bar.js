import React from 'react';
import {Box} from "../../components/box";

import logoImage from "../../images/ka-valgom-logo.jpeg"

const NavBar = (props) => {
  return (
    <Box position="sticky" top={0} left={0} zIndex={150} borderBottom="1px solid #eaeaeb" backgroundColor="white" width="100%">
      <Box maxWidth={1334} width={1334} px={10} maxHeight={77} height={77} mx="auto">
        <Box height="100%" display="flex" alignItems="center">
          <img height="50px" src={logoImage}/>
        </Box>
      </Box>
    </Box>

  );
}

export default NavBar;