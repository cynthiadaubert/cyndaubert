import React from "react";
import { useTranslation } from "react-i18next";
import styled, {css} from "styled-components"

export function Bento(){

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
                <img src="https://64.media.tumblr.com/6cea2b291f1628044d4f1ea1e9d092ac/884e8efa58988eda-fd/s100x200/1aaf42267a2e74936cf43a21e11dd94580243714.pnj" />
                <img src="https://64.media.tumblr.com/93533a66663a293f02394c4fa23959d3/884e8efa58988eda-f6/s100x200/953cd1644dc02002d4a57ada97d27ca3140f6347.pnj" />
                <img src="https://64.media.tumblr.com/369c490fc6ded0fc4fa997b80e3179b1/884e8efa58988eda-e0/s100x200/eef90549168e816d0a1c20dcb72b0ce1905aacf9.pnj" />
                <img src="https://64.media.tumblr.com/7accb39e982e195b2372d01f467f6fc4/884e8efa58988eda-ca/s100x200/755e3e9b8bc21ae724fbe0645f1350b01d4684ee.pnj"/>
                <img src="https://64.media.tumblr.com/c06ff9450db8636efdd46e5ec1ac15aa/884e8efa58988eda-79/s100x200/b45f9eff19fc6f53d1fe89f7938ea6d46a842bbb.pnj"/>
                <img src="https://64.media.tumblr.com/b58bf136f4424d061421e35a9a853ec7/884e8efa58988eda-b0/s250x400/e86c6f847b541aab499c34d0761ebc3d3e018039.pnj"/>
                <img src="https://64.media.tumblr.com/9372383518dc7b449862888eb30a2236/884e8efa58988eda-21/s100x200/e1982ff35f70d11d996e6bd0c5f2dceb34be0c4c.pnj"/>
                <img src="https://64.media.tumblr.com/75682799bb34c18ffc27e97cee0e037b/884e8efa58988eda-c3/s100x200/0bc7ddf5c47c05ea528cfb94b277fba98dfbc6e6.pnj"/>
                <img src="https://64.media.tumblr.com/1e511c4f412e7131108cdcd90c089642/884e8efa58988eda-e8/s100x200/8c34013ab45e251e6c5fae74334662cba3dceecf.pnj"/>
                <img src="https://64.media.tumblr.com/73a8b8def61796a0d0f02edf33bd234d/884e8efa58988eda-e9/s100x200/5d4a5dbac286b01cdcd85cfa8760fbb3bb56d948.pnj"/>
                <img src="https://64.media.tumblr.com/b1163fe25aead655cfdefb3c73225e75/884e8efa58988eda-f5/s100x200/c5472ecb1722292fd4f9a4897e639f7a10d4988c.pnj"/>
                <img src="https://64.media.tumblr.com/49c227cd9d6ad978db7b410f8155fde8/884e8efa58988eda-c9/s250x400/11b0a74476614e3b35a2b3b079e2ea503d10fbdc.pnj"/>
            </Box>
          </div>
        <div>
         <Title>{tr("bento.design")}</Title>
        <Box>
            <img src="https://64.media.tumblr.com/b57e494ed946a3801e23dc4fa4d63541/884e8efa58988eda-3c/s100x200/8c321c41981727a393fc1962a681e4ec2afb435a.pnj" />
            <img src="https://64.media.tumblr.com/03e81600615caa968bd16820cd0712d1/884e8efa58988eda-d8/s100x200/3206d1a3e532649611e1a4b34cba7f099fffe64f.pnj" />
            <img src="https://64.media.tumblr.com/ca593c75e9663596933f3e91c65e5d58/884e8efa58988eda-84/s100x200/ea678a9f2ebc43b4988e3857f2f3753ec3bf0896.pnj" />
            <img src="https://64.media.tumblr.com/05328f5b85a0780c1e54625620dd6029/884e8efa58988eda-12/s100x200/c9c58b9c49122f0265020d9583f8ea3204c05b04.pnj" />
            <img src="https://64.media.tumblr.com/fb40687b2d55361fcaa390117bf0fa7e/884e8efa58988eda-67/s100x200/4bfe6228f836ebad4e2a7ed1dc2a45d03a305db9.pnj" />
            <img src="https://64.media.tumblr.com/27c2685511c5e9de35f93be6b1ecde24/884e8efa58988eda-88/s100x200/6d0c2f27aa00e510a3d8f94f438088fec8b6b756.pnj" />
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
