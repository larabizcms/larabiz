import {Link} from "react-router-dom";
import { styled } from "@mui/material";
import React from 'react';

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      {/* <img src="/images/logos/dark-logo.svg" alt="logo" height={70} width={174} /> */}
    </LinkStyled>
  );
};

export default Logo;
