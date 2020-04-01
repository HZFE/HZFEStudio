import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const TitleBox = styled.div`
  max-width: 1440px;
  height: 452px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const TitleContent = styled.div``;

const Title = styled.h1`
  font-size: 140px;
  font-weight: 800;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  -webkit-text-stroke: 2px #000;
  color: transparent;
`;

const Bio = styled.div``;

const HeroHeader = () => (
  <Wrapper>
    <TitleBox>
      <TitleContent>
        <Title>HZFE·Studio</Title>
        <Bio>Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer.”</Bio>
      </TitleContent>
    </TitleBox>
  </Wrapper>
);

export default HeroHeader;
