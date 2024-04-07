import React,  {useEffect, useState} from "react";
import styled from "styled-components";


function Footer (){

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100wh;
height: 60px;
background-color: #ffffff;
margin-top: 80px;
padding-bottom: 15px;
background-color: rgba(255, 255, 255, 0.00);


@media (min-width: 769px) {
margin: 0;
padding: 0;
}

`;

const Copy = styled.a`
color: #120813;
font-family: "Playfair Display", serif;
letter-spacing: 1px;
font-weight: bolder;
font-size: 15px;
`;

return (
      <Box>
        <Copy>© 2024 | Cynthia Perez Daubert</Copy>
      </Box>
)

}


export {Footer}

