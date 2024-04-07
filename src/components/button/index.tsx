import React,  {Children, useEffect, useState} from "react";
import styled, {css} from "styled-components"



export function Button({children}){


  const Button = styled.button`
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
  }

`; 

    return (
        
    <Button>{children}</Button>
  
    )
}

