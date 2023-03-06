import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Open Source Projects'},
  { number: 1, text: 'Students', },
  { number: 5, text: 'Github Followers', },
  { number: 5, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Archivements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
    <Box key={index}>
      <BoxNum>{card.number}+</BoxNum>
      <BoxText>{card.text}+</BoxText>
    </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
