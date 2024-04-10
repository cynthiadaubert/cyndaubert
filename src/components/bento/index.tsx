import React,  {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import styled, {css} from "styled-components"
import html from "../../public/icons/html-5.png"
import cs from "../../public/icons/css.png"
import javas from "../../public/icons/javascript.png"
import nodej from "../../public/icons/nodejs.png"
import fire from "../../public/icons/firebase.png"
import next from "../../public/icons/next.png"
import git from "../../public/icons/github.png"
import post from "../../public/icons/postgre.png"
import reac from "../../public/icons/react.png"
import types from "../../public/icons/typescript.png"
import after from "../../public/icons/after-effects.png"
import illu from "../../public/icons/illustrator.png"
import prem from "../../public/icons/premiere.png"
import sty from "../../public/icons/styled.png"
import anim from "../../public/icons/animate.png"
import ps from "../../public/icons/photoshop.png"
import vrc from "../../public/icons/verc.png"
import clip from "../../public/icons/clips.png"

export function Bento(){

  // translation
  
  // translation
  const [tr, i18n] = useTranslation("global")

  // styles

  const Cont = styled.div`
  margin-bottom: 50px;
  animation: fadeIn 2s ease forwards;

  @keyframes fadeIn {
    0% {
        opacity: 0; 
    }
    100% {
        opacity: 1; 
    }

  } 
  
  @media (min-width: 769px)  {
    display: flex;
    flex-direction: grid;
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
    text-align: left;
    font-size: 32px;
    height: fit-content;
    margin: 20px 0px 10px 0px;
    color: #000000;
    padding: 0;

    @media (min-width: 769px) {
      margin-left: 30px;
    }
    `;

  const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  row-gap: 20px;
  height: max-content;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(20px);
  border-radius: 8px; 
  overflow: hidden; 
  padding: 40px 20px 40px 40px;
  margin: 18px 0px 50px 0px;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    justify-content: center; 
    gap: 50px; 
    width: max-content;
    margin: 30px;
  }
  
  `;

  const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: max-content;
  width: 290px;
  background-color: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(20px);
  border-radius: 8px; 
  padding: 20px 0px 20px 20px;
  margin-top: 20px;

  @media (min-width: 769px) {
    margin: 30px;
  }
  `;

  const Descr = styled.ul`
  list-style-type: none;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  margin: 0;
  padding: 0;
  line-height: 35px;
  text-align: left;
  `;

    return (
      <div>
        <Cont>
        <div>  
            <Title>Stack</Title>  
            <Box>
                <img src={javas} />
                <img src={html} />
                <img src={cs} />
                <img src={types}/>
                <img src={reac}/>
                <img src={next}/>
                <img src={nodej}/>
                <img src={fire}/>
                <img src={git}/>
                <img src={post}/>
                <img src={sty}/>
                <img src={vrc}/>
            </Box>
          </div>
        <div>
         <Title>{tr("bento.design")}</Title>
        <Box>
            <img src={ps} />
            <img src={illu} />
            <img src={anim} />
            <img src={after} />
            <img src={prem} />
            <img src={clip} />
        </Box>
        </div>
        <div>
        <Title>Soft skills</Title>
        <Skill>
        <Descr>
         <li>✍️​ {tr("bento.list-a")}</li>
         <li>✍️​ {tr("bento.list-b")}</li>
         <li>✍️​ {tr("bento.list-c")}</li>
         <li>✍️​ {tr("bento.list-d")}</li>
         <li>✍️ {tr("bento.list-e")}</li>
         <li>✍️​ {tr("bento.list-f")}</li>
         <li>✍️​ {tr("bento.list-g")}</li>
         <li>✍️​ {tr("bento.list-h")}</li>
         <li>✍️​ {tr("bento.list-i")}</li>
         <li>✍️​ {tr("bento.list-j")}</li>
         <li>✍️​ {tr("bento.list-k")}</li></Descr>
        </Skill>
        </div>
        </Cont>
      </div>
    )
}
