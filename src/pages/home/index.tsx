import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import styled, {css} from "styled-components"
import { Header } from "../../components/header"; 
import { Footer } from "components/footer";
import { Button } from "components/button";
import { ContactCard } from "components/contact";
import photo from "../../public/circle.png"
import laptop from "../../public/notebook.png"
import LanguageToggle from "components/language/index"


function Home() {

  // translation
  const [tr, i18n] = useTranslation("global")

  
  

/*   // toggle language
  const LanguageToggle = ({ i18n }) => {
    const [isSpanish, setIsSpanish] = useState(false); // State to track current language
  
    const toggleLanguage = () => {
      const newLanguage = isSpanish ? 'en' : 'es'; // Toggle between 'en' and 'es'
      setIsSpanish(!isSpanish); // Toggle the state
      i18n.changeLanguage(newLanguage); // Change the language using i18n
    };
  
    return (
      <button onClick={toggleLanguage}>
        {isSpanish ? 'English' : 'Español'}
      </button>
    );
  };
 */
  // download resume
  const handleClick = ()=>{
    const url = 'https://drive.google.com/file/d/16VRU6zGc_wHf-vVBdx6qhpSMt6RQyO5E/view';
    window.open(url, '_blank');
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

  
  @media (min-width: 769px) {  
  display: inherit;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 22px;
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


  const Laptop = styled.img`
  display: none;

  @media (min-width: 769px) {
    display: inherit;
    width: 420px;
    margin-top: -150px; 
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
  color: #585D6B;
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
        
        <Laptop src={laptop}></Laptop>
        <TextBio>{tr("bio.textbio")}</TextBio>
        <Button onClick={handleClick}>{tr("bio.button")}</Button>
        <LanguageToggle></LanguageToggle>
      </Biocard>
      <LinksCard><ContactCard></ContactCard></LinksCard>
    </Container>
    </Box>
    <Footer></Footer>
  </div>
)
}

export {Home};