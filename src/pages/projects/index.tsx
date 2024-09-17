import React from "react";
import { Cards } from "components/cards";
import styled from "styled-components";
import { useTranslation } from "react-i18next";



function Projects() {

    // translation
    const [tr, i18n] = useTranslation("global")

  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
  font-weight: bolder;
  color: #fff1fa;
  text-align: center;
  font-size: 56px;
  height: fit-content;
  margin: 120px 0px 0px 0px;
  padding: 0;

  @media (min-width: 769px) {
  font-size: 4em;
  color: #9F81FC;
  letter-spacing: 6px;
  }
  `;


  return (
    <div className="anim">
      <section id="projects">
      <Title>{tr("project.title")}</Title>
      <Cards></Cards>
      </section>
    </div>
)
}

export {Projects};