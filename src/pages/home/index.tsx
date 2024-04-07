import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import styled, {css} from "styled-components"
import { Header } from "../../components/header"; 
import { Footer } from "components/footer";
import { Button } from "components/button";
import { ContactCard } from "components/contact";
import photo from "../../public/circle.png"



function Home() {

  const Cont = styled.div`
  display: none;

  @media (min-width: 769px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  `;

  const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 22px;
  margin: 0px 0px 50px 0px;
  padding: 0 auto;
  `;

  const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  `;

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 2s ease forwards;

  @keyframes fadeIn {
    0% {
        opacity: 0; 
    }
    100% {
        opacity: 1; 
    }

  } 

  @media (min-width: 769px) {  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1550px;
    margin-bottom: 50px;

    left: -5%;
    animation: fadeSlideIn 1.5s ease forwards;
  
    @keyframes fadeSlideIn {
      0% {
          opacity: 0; 
          transform: translateX(-5%); 
      }
      100% {
          opacity: 1; 
          transform: translateX(0);
      }
  }

  `;

  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: normal;
  text-align: center;
  font-size: 4.5em;
  height: fit-content;
  margin: 20px 0px 10px 0px;
  color: #585D6B;
  padding: 0;

  @media (min-width: 769px) {
    display: none;
  }

  `;

  const BigTitle = styled.h1`

  display: none;

  @media (min-width: 769px) {
    display: inherit;
    font-family: "Playfair Display", serif;
    letter-spacing: 2px;
    font-weight: normal;
    text-align: center;
    font-size: 4.5em;
    height: max-content;
    margin: 0 auto;
    color: #585D6B;
    padding: 0;
  }

  `;
  
  const Biocard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  border-radius: 20px;
  width: 90%;
  align-items: center;
  margin: 20px 0px 25px 0px;
  padding: 50px 0px 25px 0px;
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);

  @media (min-width: 769px) {
    width: 700px;
  }

  `;

  const Image = styled.img`
  height: 120px;
  width: 120px;

  @media (min-width: 769px) {
    display: none;
  }

  `;

  const Img = styled.div`
  display: none;
  height: 280px;
  width: 600px;
  background-color: white;

  @media (min-width: 769px) {
    display: inherit;
  }

  `;

  const TextBio = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 18px;
  margin: 35px 20px 20px 20px;
  padding: 0;
  line-height: 30px;
  text-align: center;
  color: #585D6B;
  `;

  
  return (  
  <div>
    <Header></Header>
    <Box>
    <Container> 
      
      <Cont>
        <BigTitle>Cynthia Daubert</BigTitle>
        <Subtitle>Fullstack developer</Subtitle>
        <ContactCard></ContactCard>
      </Cont>
    
      <Biocard>
        <Image src={photo}/>
        <Title>Cynthia Daubert</Title>
        
        <Img></Img>
        <TextBio>Hello! I'm a web developer specialized in frontend, with experience in technologies such as JavaScript, React and Node.js, among other popular frameworks. Currently, I'm continuing my studies in backend development and data management. I hope you enjoy checking my work!</TextBio>
        <Button>Download resume</Button>
      </Biocard>
    </Container>
    </Box>
    <Footer></Footer>
  </div>
)
}

export {Home};