import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { wrapper } from '../../utils/styled';

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background: #fff;
  opacity: 0.9;
  border-bottom: 1px solid #f4f4f4;
`;

const Container = styled.div`
  ${wrapper()}
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`

`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #161b3d;
`;


const Header = () => (
  <Wrapper>
    <Container>
      <LogoBox>
        <Title>HZFE</Title>
      </LogoBox>
      <Menu />
    </Container>
  </Wrapper>
);

export default Header;
