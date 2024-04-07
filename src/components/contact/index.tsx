import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import email from "../../public/icons/email-outline.png"
import linked from "../../public/icons/linkedin-outline.png"
import git from "../../public/icons/github-outline.png"



function ContactCard() {
  
  const Boxcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 20px; 
  padding-bottom: 25px;
  margin: 18px 0px 18px 0px;
  `;
  
  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  font-size: 58px;
  height: fit-content;
  margin: 20px 0px 0px 0px;
  color: #9F81FC;
  padding: 0;
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
  `;

  const Add = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 50px;
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

  const Pep = styled.div`
  display: flex;
  height: 50px;
  margin-bottom: 15px;
  `;

  return (
      <Boxcard>
        <Title>Let's connect!</Title>
            <Socials>
              
                    <Add>cynthiaperezdaubert@gmail.com</Add>
                
           
                <Pep>
                    <img src={linked}/> <Adress to="https://www.linkedin.com/in/cynperezdaubert/">Linkedin</Adress>
                </Pep>
                    
                <Pep>
                    <img src={git}/> <Adress to="https://github.com/cynthiadaubert">Github</Adress>
                </Pep>            
            </Socials>
            <Thx>❤︎ Thanks for your visit!</Thx>
      </Boxcard>
   )
}

export {ContactCard};

/* 
<img src={email}/>  */