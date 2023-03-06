import Link from 'next/link';
import React from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Projects" smooth>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" smooth>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About" smooth>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/SheikhJack?tab=repositories'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/kealeboga-mosate-019524a5/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://alison.com/cv/shared/111385?utm_campaign=cv_page&utm_source=direct&utm_medium=social'>
        <AiFillFilePdf size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
  
);

export default Header;
