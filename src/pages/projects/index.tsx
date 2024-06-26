import React, {useEffect} from "react";
import { Card } from "components/cards";
import { Header } from "components/header";
import { Footer } from "components/footer";
import styled from "styled-components";
import { useTranslation } from "react-i18next";



function Projects() {

    // translation
    const [tr, i18n] = useTranslation("global")

  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: normal;
  text-align: center;
  font-size: 4em;
  height: fit-content;
  margin: 0px 0px 80px 0px;
  color: #585D6B;
  padding: 0;
  `;


  return (
    <div>
      <Header></Header>
      <Title>{tr("project.title")}</Title>
      <Card></Card>
      <Footer></Footer>
    </div>
)
}

export {Projects};