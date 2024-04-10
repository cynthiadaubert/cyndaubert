import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {

    const Lang = styled.p`
    font-family: "Inter", sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    margin: 15px 0px 0px 0px;
    padding: 0 auto;
    line-height: 30px;
    text-align: left;
  
    &:hover {
      color: #9F81FC;
      transition: color 0.3s ease;
      cursor: pointer;
    }
    
    `;
  
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Lang onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'Español' : 'English'}
    </Lang>
  );
};

export default LanguageToggle;