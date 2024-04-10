import React,  {Children, useEffect, useState} from "react";
import styled, {css} from "styled-components"



export function Button({onClick = () => {}, children}){
// no solo va a esperar un children sino que opcionalmente espera onClick con el valor por default (una función vacía)

  const StyledButton = styled.button`
  background-color: transparent;
  height: 45px;
  border: solid 2.5px #ffffff;
  border-radius: 30px;
  width: fit-content;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding: 0px 30px 0px 30px;
  margin-top: 15px;

  &:hover {
    color: #9F81FC;
    transition: color 0.3s ease;
    cursor: pointer;
  }

`; 

    return (
        
    <StyledButton onClick={onClick}>{children}</StyledButton>
  
    )
}

