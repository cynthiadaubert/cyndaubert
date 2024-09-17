import React,  {Children} from "react";
import styled, {css} from "styled-components"

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps){

  const StyledBadge = styled.button`
  background-color: #9F81FC;
  height: 25px;
  border: none;
  border-radius: 20px;
  width: max-content;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
  padding: 0 auto;
  margin: 0 auto;

`; 

    return (
        
    <StyledBadge>{children}</StyledBadge>
  
    )
}

