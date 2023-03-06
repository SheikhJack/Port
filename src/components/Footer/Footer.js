import React from 'react';
import { AiFillGithub, AiFillFilePdf, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='Tel:+26774524437'>+26774524437 <br/>+26774448813</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:kealebogakido@gmail.com'>kealebogakido@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Client Comes First</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/SheikhJack?tab=repositories'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/kealeboga-mosate-019524a5/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://alison.com/cv/shared/111385?utm_campaign=cv_page&utm_source=direct&utm_medium=social'>
          <AiFillFilePdf size='3rem' />
        </SocialIcons>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
