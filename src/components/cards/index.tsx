import React,  {useEffect, useState} from "react";
import img from "../../public/pep.png"
import styled, {css} from "styled-components"
import { Button } from "components/button";
import { Badge } from "components/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



export function Cards(){

  const [tr, i18n] = useTranslation("global")

  // CUSTOM STYLES

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px 80px 0px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  `;

  const Boxcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  border-radius: 20px; 
  overflow: hidden; 
  padding-bottom: 25px;
  margin: 18px 0px 18px 0px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 950px;
    margin: 30px;
    width: 100vw;
  }

  `;

  const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 20px;  
  width: 100%;
  height: max-content;

    @media (min-width: 769px) {
    width: max-content;
    box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.8);
  }

  `;

  const Title = styled.h1`
  font-family: "Inter", sans-serif;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  font-size: 36px;
  height: fit-content;
  padding: 0;
  margin: 30px 0px 30px 0px;
  width: 300px;
  color: #f2ebff;
  
  @media (min-width: 769px) {
  font-size: 42px;
  color: #9F81FC;
  margin: 30px 30px 30px 30px;
  width: 400px;
  }
  `;

  const Desc = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  width: 275px;
  height: max-content;
  margin-bottom: 20px;
  


  @media (min-width: 769px) {
  width: 380px;
  color: #4a495c;
  font-size: 20px;
  }
`;

const Image = styled.img`
width: 100%;
padding: 20px;
border-radius: 15px;


@media (min-width: 769px) {
  width: 700px;
  border-radius: 15px;
}

`;

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  height: 80px;
  margin: 40px 0px 40px 0px;
`;


return (
  
  <Container>
      <Boxcard>
        <Image src={"./src/public/465shots_soa.png"}/>
        <Subcontainer>
          <Title>Petfinder Webapp</Title>
          <Desc>{tr("project.petfinder")}</Desc>
          <Link to={"https://github.com/cynthiadaubert/desafio-m8"}><Button>Repo</Button></Link>
          <Link to={"https://desafio-m8-e7ec6.web.app/"}><Button>Live view</Button></Link>
          <Stack>
             <Badge>React.js</Badge><Badge>Typescript</Badge><Badge>React Router DOM</Badge>
             <Badge>Node.js</Badge><Badge>Firebase</Badge><Badge>Webpack</Badge><Badge>Sequelize</Badge><Badge>Postman</Badge>
          </Stack>
        </Subcontainer>
      </Boxcard>
      <Boxcard>
        <Image src={"./src/public/144shots_so.png"}/>
        <Subcontainer>
          <Title>{tr("project.rps")}</Title>
          <Desc>{tr("project.r_desc")}</Desc>
          <Link to={"https://github.com/cynthiadaubert/desafio-m5"}><Button>Repo</Button></Link>
          <Link to={"https://cynthiadaubert.github.io/desafio-m5"}><Button>Live view</Button></Link>
          <Stack>
             <Badge>Typescript</Badge><Badge>HTML</Badge><Badge>CSS</Badge><Badge>custom state</Badge><Badge>custom components</Badge>
          </Stack>
        </Subcontainer>
      </Boxcard>
  </Container>
);

}
