import React from 'react';
import styled from 'styled-components';

const CoverBox = styled.div<{background: string}>`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-image: url(${(_) => _.background});
  background-attachment: fixed;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Cover = () => (
  <CoverBox background="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />
);

export default Cover;
