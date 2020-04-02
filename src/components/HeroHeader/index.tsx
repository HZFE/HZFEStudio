import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { textStroke, wrapper } from '../../utils/styled';

const Wrapper = styled.div`

`;

const TitleBox = styled.div`
  ${wrapper()}
  height: 452px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const TitleContent = styled.div``;

const Title = styled(motion.h1)`
  font-size: 140px;
  font-weight: 800;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  ${textStroke()}
`;

const Bio = styled(motion.div)``;

const HeroHeader = () => (
  <Wrapper>
    <TitleBox>
      <TitleContent>
        <Title
          initial={{ translateY: 400, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 100,
          }}
          positionTransition
        >
          HZFE·Studio

        </Title>
        <Bio
          initial={{ translateY: 400 }}
          animate={{ translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 100,
            delay: 0.2,
          }}
          positionTransition
        >
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer.”
        </Bio>
      </TitleContent>
    </TitleBox>
  </Wrapper>
);

export default HeroHeader;
