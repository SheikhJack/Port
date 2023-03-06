import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Welcome To <br/>
    My Personal Portfolio
    </SectionTitle>
    <SectionText>
    As a full stack developer with several years of experience, I have honed my skills in both front-end and back-end development, allowing me to create dynamic and user-friendly applications that meet the needs of clients and users alike. My expertise in multiple programming languages and frameworks enables me to design and implement scalable solutions, from concept to deployment. With a passion for staying up-to-date with the latest industry trends and technologies, I am committed to delivering high-quality work that exceeds expectations.
    </SectionText>
    <Button onClick={() => window.location = 'https://alison.com/cv/shared/111385?utm_campaign=cv_page&utm_source=direct&utm_medium=social'}>Learn More</Button>
  </LeftSection> 
 </Section>

);

export default Hero;