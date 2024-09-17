import React from "react";
import { useTranslation } from "react-i18next";
import sequelize from "../../public/icons/sequeliz.png"
import tipescript from "../../public/icons/type.png"
import vercel from "../../public/icons/vercel.png"
import next from "../../public/icons/nextjs.png"
import webpack from "../../public/icons/webpack.png"
import styled, {css} from "styled-components"

export function StackBox(){

  // translation
  const [tr, i18n] = useTranslation("global")

  // styles

  const Cont = styled.div`
  margin-bottom: 50px;
  padding: 0px;
  
  @media (min-width: 769px)  {
  margin: 0;
  padding: 0;
  `;

  const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 330px;
  padding: 0 auto;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    justify-content: center; 
    align-items: end;
    width: max-content;
    height: max-content;
    margin: 0;
    padding: 0;
  }
  
  `;

  const Item = styled.div`
  margin: 6px;
  padding: 0; 
  display: flex;
  height: 105px; 
  width: 90px; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  background-color: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(20px);
  border-radius: 4px; 
  color: #ffffff;
  font-size: 70px;

  @media (min-width: 769px) {
  height: 120px; 
  width: 120px; 
  margin: 25px;
  padding: 0; 
  font-size: 75px;
  border-radius: 6px; 
  }

  `;

  // el font-size en item es el tamño del icono

  const Name = styled.h3`
  color: #f2ebff;
  font-family: "Inter", sans-serif;
  font-weight: normal;
  font-size: 15px;
  margin-top: 10px;

  @media (min-width: 769px) {
  color: #f2ebff;
  font-size: 20px;
  }


  `;



    return (
      <div>
        <Cont> 
            <Box>
              <Item><i className="fab fa-js"></i><Name>JavaScript</Name></Item>
              <Item><i className="fab fa-html5"></i><Name>HTML</Name></Item>
              <Item><i className="fab fa-css3-alt"></i><Name>CSS</Name></Item>
              <Item><img src={tipescript}/><Name>Typescript</Name></Item>
              <Item><i className="fa-brands fa-react"></i><Name>React</Name></Item>
              <Item><img src={next}/><Name>Next.js</Name></Item>
              <Item><i className="fa-brands fa-node-js"></i><Name>Node.js</Name></Item>
              <Item><img src={sequelize} /><Name>Sequelize</Name></Item>
              <Item><i className="fa-solid fa-fire-flame-curved"></i><Name>Firebase</Name></Item>
              <Item><img src={vercel}/><Name>Vercel</Name></Item>
              <Item><img src={webpack}/><Name>Webpack</Name></Item>
              <Item><i className="fa-brands fa-git-alt"></i><Name>Git</Name></Item>
              <Item><i className="fa-brands fa-github"></i><Name>Github</Name></Item>
              <Item><i className="fa-brands fa-bootstrap"></i><Name>Bootstrap</Name></Item>
              <Item><i className="fa-solid fa-hand-sparkles"></i><Name>styled-components</Name></Item>
              <Item><i className="fa-brands fa-figma"></i><Name>Figma</Name></Item>
            </Box>
        </Cont>
      </div>
    )
}
