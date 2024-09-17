import React,  {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components";
import { useTranslation } from "react-i18next";



function Header (){

  const [tr, i18n] = useTranslation("global")

  // STYLES

  const Container = styled.div`
  display: flex;
  justify-content: center;
  `;

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 500px;
height: 50px;
background-color: #ffffff;
margin-bottom: 80px;
padding: 10px 40px 0px 40px ;
background-color: rgba(255, 255, 255, 0.00);

@media (min-width: 769px) {
  display: flex;
  padding: 0 auto;
  justify-content: space-around;
  width: 40%;
}

`;

const StyledLink = styled.a`
color: #4a495c;
font-family: "Inter", sans-serif;
font-weight: normal;
font-size: 16px;
text-decoration: none !important;

&:hover {
  color: #f2ebff;
  transition: color 0.3s ease;
}

`;

return (
    <div>
      <Container>
      <Box>
        <StyledLink href="#home">{tr("header.home")}</StyledLink>
        <StyledLink href="#projects">{tr("header.projects")}</StyledLink>
        <StyledLink href="#stack">{tr("header.stack")}</StyledLink>
      </Box>
      </Container>
    </div>
)

}


export {Header}

