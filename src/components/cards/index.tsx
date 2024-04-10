import React,  {useEffect, useState} from "react";
import img from "../../public/pep.png"
import styled, {css} from "styled-components"
import { Button } from "components/button";
import { Link } from "react-router-dom";



export function Card(){
  
  const [entries, setEntries] = useState([]);

  const spaceId = 'zo7euwrtovoc';
  const accessToken = 'bm_FCTa7YGpnFNbn-4rRu8bQ9wtpSpRSEBPPp6NDWh0';

  // CONTENT DELIVERY API
  useEffect(() => {
  const contentTypeId = 'portfolioDev';
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=${contentTypeId}&access_token=${accessToken}`;


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setEntries(data.items);
  const entries = data.items; // Array de entries
    entries.forEach(entry => {
     // console.log(entry.fields.title, entry.fields.text, entry.fields, entry.fields.imageUrl,entry.fields.url, entry.fields.liveView); 
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
},[])

  // CUSTOM STYLES

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: fadeIn 2s ease forwards;
  margin: 80px 0px 80px 0px;

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
    justify-content: center;
    position: relative;
    top: -5%;
    opacity: 0; 
    animation: fadeSlideIn 1.5s ease forwards; 
  
    @keyframes fadeSlideIn {
      0% {
          opacity: 0; 
          transform: translateY(-5%); 
      }
      100% {
          opacity: 1; 
          transform: translateY(0);
      }
  }
  
  `;

  const Boxcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  background-color: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 12px rgba(0,0,0,0.1);
  border-radius: 20px; 
  overflow: hidden; 
  padding-bottom: 25px;
  margin: 18px 0px 18px 0px;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 700px;
    margin: 30px;
    width: 380px;
  }

  `;

  const Title = styled.h1`
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
  font-weight: lighter;
  text-align: center;
  font-size: 36px;
  height: fit-content;
  margin: 20px 0px 10px 0px;
  color: #000000;
  padding: 0;
  `;

  const Descr = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 16px;
  margin: 35px 20px 35px 20px;
  padding: 0;
  line-height: 30px;
  text-align: center;
  width: 285px;
  height: max-content;

 

  @media (min-width: 769px) {
    width: 350px;
    height: 350px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial; 
  }
`;

const Image = styled.img`
height: 350px;
width: 280px;
padding-top: 20px;
border-radius: 15px;
transition: opacity 0.5s ease;

@media (min-width: 769px) {
  height: 300px;
  width: 200px;
  padding-top: 20px;
  border-radius: 15px;
}

&:hover {
  opacity: 0.4;
}

`;


return (
  
  <Container>
    {entries.map(entry => (
      <Boxcard key={entry.sys.id}>
        <Image src={entry.fields.imageUrl}/>
        <Title>{entry.fields.title}</Title>
        <Descr>{entry.fields.text}</Descr>
        <Link to={entry.fields.url}><Button>Repo</Button></Link>
        <Link to={entry.fields.liveView}><Button>Live view</Button></Link>
      </Boxcard>
    ))}
  </Container>
);

}
