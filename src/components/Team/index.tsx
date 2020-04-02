import React from 'react';
import styled from 'styled-components';

import members from '../../members.json';
import { textStroke, wrapper } from '../../utils/styled';

const Wrapper = styled.div`

`;

const Box = styled.div`
  ${wrapper()}
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  font-size: 100px;
  text-align: right;
  font-weight: 800;
  margin: 0;
  padding: 0;
  margin-bottom: 80px;
  ${textStroke()}
`;

const UserBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  width: 100%;
`;

const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const UserName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const Team = () => (
  <Wrapper>
    <Box>
      <Title>Meet our team</Title>
      <UserBox>
        {members.map((member) => (
          <UserItem key={member.github}>
            <Avatar src={member.avatar} />
            <UserName>{member.name}</UserName>
          </UserItem>
        ))}
      </UserBox>
    </Box>
  </Wrapper>
);

export default Team;
