import React from "react";
import { StackBox } from "components/stackBox";
import styled, {css} from "styled-components"



function Stack() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  `;
  
  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 6px;
  font-weight: bold;
  text-align: center;
  font-size: 4em;
  height: fit-content;
  margin: 80px 0px 50px 0px;
  color: #fff1fa;
  padding: 0;

  @media (min-width: 769px) {
  font-size: 4em;
  color: #9F81FC;
  letter-spacing: 6px;
  }

  `;

  return (
  <div className="anim">
    <section id="stack">
    <Container>
      <Title>STACK</Title>
      <StackBox></StackBox>
    </Container>
    </section>
  </div>
  )
    
}

export {Stack};