import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components"
import { Button } from "components/button";
import { ContactCard } from "components/contact";
import photo from "../../public/circle.png"
import starOne from "../../public/star01.png"
import starTwo from "../../public/star02.png"
import laptop from "../../public/notebook.png"
import LanguageToggle from "components/language/index"


function Home() {

  // translation
  const [tr, i18n] = useTranslation("global")

  // download resume
  const handleClick = ()=>{
    const url = 'https://drive.google.com/file/d/1nWju_n5CRqs-0vx9pLXUs-Mpcha49aLY/view';
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // styles
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
  display: none;
  color: #9F81FC;
  @media (min-width: 769px) {  
  display: inherit;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  margin: 0px 0px 50px 0px;
  padding: 0 auto;
  }

  `;

  const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  `;

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1550px;
    margin-bottom: 50px;
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
    color: #4a495c;
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
    width: 680px;
  }

  `;

  const Image = styled.img`
  height: 120px;
  width: 120px;

  @media (min-width: 769px) {
    display: none;
  }

  `;
  const StarOne = styled.img`
  display: none;

  @keyframes fadeOut {
    0%, 100% {
        opacity: 0.3;
    }
    50% {
        opacity: 0.7; 
         transform: translateY(40px); 
    }
  }



  @media (min-width: 769px) {
    display: inherit;
    height: 100px;
    position: absolute;
    margin-left: -450px;
    margin-top: -120px;
    opacity: 0;
    animation: fadeOut 5s infinite;
  }

  `;
  const StarTwo = styled.img`
  display: none;

    @keyframes fadeInOut {
    0%, 100% {
        opacity: 0.7;
        transform: translateY(0); 
    }
    50% {
        opacity: 0.3; 
        transform: translateY(-25px); 
    }
  }


  @media (min-width: 769px) {
    display: inherit;
    height: 100px;
    position: absolute;
    margin-right: -550px;
    margin-top: 220px;
    animation: fadeInOut 5s infinite;
  }

  `;


  const Laptop = styled.img`
  display: none;

  @media (min-width: 769px) {
    display: inherit;
    width: 420px;
    margin-top: -150px; 
    filter: drop-shadow(-2mm -1mm 3mm rgba(57, 45, 181,0.3));
  }

  `;

  const TextBio = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 18px;
  margin: 20px 20px 20px 20px;
  padding: 0;
  line-height: 30px;
  text-align: center;
  color: #4a495c;
  `;

  const LinksCard = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;

  @media (min-width: 769px) {
    display: none;
  }

  `;

  
  return (  
  <div className="anim">
    <section id="home">
    <Box>
    <Container> 
      
      <Cont>
        <BigTitle>Cynthia Daubert</BigTitle>
        <Subtitle>Frontend developer</Subtitle>
        <ContactCard></ContactCard>
      </Cont>
    
      <Biocard>
        <Image src={photo}/>
        <Title>Cynthia Daubert</Title>
        
        <StarOne src={starOne}></StarOne>
        <Laptop src={laptop}></Laptop>
        <StarTwo src={starTwo}></StarTwo>
        <TextBio>{tr("bio.textbio")}</TextBio>
        <Button onClick={handleClick}>{tr("bio.button")}</Button>
        <LanguageToggle></LanguageToggle>
      </Biocard>
      <LinksCard><ContactCard></ContactCard></LinksCard>
    </Container>
    </Box>
    </section>
  </div>
)
}

export {Home};