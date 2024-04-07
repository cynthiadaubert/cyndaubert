import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { Header } from "../../components/header";
import { Bento } from "components/bento";
import { Footer } from "components/footer";
import styled, {css} from "styled-components"



function Skills() {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  `;
  
  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: normal;
  text-align: center;
  font-size: 4em;
  height: fit-content;
  margin: 0px 0px 50px 0px;
  color: #585D6B;
  padding: 0;
  `;

  return (
  <div>
  <Header></Header>
    <Container>
      <Title>Skills</Title>
      <Bento></Bento>
      <Footer></Footer>
    </Container>
  </div>
  )
    
}

export {Skills};