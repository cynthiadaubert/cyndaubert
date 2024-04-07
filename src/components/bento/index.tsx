import React,  {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
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

// es css inyectado con template string
// tambien podemos interpolar valores con la expresion ${}
// NESTING DE SASS: &:hover el mismo H1 en el estado hover
// tambien se pueden crear funciones como setTransitionTime
// se pueden también pasar variables/valores como propiedades css por las props
// también un renderizado condicional: si no recibo nada por props, || renderizo el color blanco
// se pueden interpolar mas css con template string (props.isbutton)
// se pueden crear animaciones (fade in)


export function Bento(){

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

  const Descr = styled.p`
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
         <Title>Design</Title>
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
          <Descr>✍️​ Planning and scheduling</Descr>
          <Descr>✍️​ Time management</Descr>
          <Descr>✍️​ Decision making</Descr>
          <Descr>✍️​ Teamwork</Descr>
          <Descr>✍️​ Productivity</Descr>
          <Descr>✍️​ Flexibility</Descr>
          <Descr>✍️​ Adaptability</Descr>
          <Descr>✍️​ Collaboration</Descr>
          <Descr>✍️​ Proactivity</Descr>
          <Descr>✍️​ Diligence</Descr>
          <Descr>✍️​ Integrity</Descr>
        </Skill>
        </div>
        </Cont>
      </div>
    )
}
