import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import clip from "../../public/clip.png"
import linked from "../../public/icons/linkedin-outline.png"
import git from "../../public/icons/github-outline.png"



function ContactCard() {
  
  // translation
  const [tr, i18n] = useTranslation("global")

  const textToCopy = "cynthiaperezdaubert@gmail.com"

  const handleCopy= ()=>{
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard');
      alert("Text copied to clipboard! ❤︎")
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  }

  //styles
  const Boxcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 20px; 
  padding: 15px 10px 25px 10px;
  margin: 18px 0px 18px 0px;

  
  @media (min-width: 769px) {
    width: 90%;
  }

  `;
  
  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  font-size: 46px;
  height: fit-content;
  color: #fff1fa;
  margin: 20px 10px 0px 10px;
  padding: 0;

  @media (min-width: 769px) {
    font-size: 58px;
    color: #9F81FC;
    margin: 20px 0px 0px 0px;
  }

  `;

  const Adress = styled(Link)`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin: 0px 10px 30px 10px;
  padding-top: 10px;
  line-height: 30px;
  text-align: left;
  text-decoration: none;
  color: #000000;

  &:hover {
    cursor: pointer;
  }
  
  `;

  const Add = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 17px;
  line-height: 30px;
  text-align: left;
  `;

  const Thx = styled.p`
  font-family: "Inter", sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 30px;
  text-align: left;
  `;

  const Socials = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 320px;
  height: fit-content;
  `;

  const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin: 15px 0px 25px 0px;

  &:hover {
  color: #9F81FC;
  font-weight: bold;
  transition: color 0.3s ease;
}
  
  `;

  const Pep = styled.div`
  display: flex;
  height: 50px;
  margin-bottom: 15px;
  `;

  return (
      <Boxcard>
        <Title>{tr("contact.connect")}</Title>
            <Socials>
                <Text><Add>{textToCopy}</Add><img onClick={handleCopy} src={clip}/></Text>
                <Pep>
                    <img src={linked}/> <Adress to="https://www.linkedin.com/in/cynperezdaubert/">Linkedin</Adress>
                </Pep>    
                <Pep>
                    <img src={git}/> <Adress to="https://github.com/cynthiadaubert">Github</Adress>
                </Pep>            
            </Socials>
            <Thx>❤︎ {tr("contact.thx")}</Thx>
      </Boxcard>
   )
}

export {ContactCard};
