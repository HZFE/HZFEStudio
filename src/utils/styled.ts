import { css } from 'styled-components';

export const wrapper = () => () => css`
  max-width: 1440px;
  margin: 0 auto;
`;

export const textStroke = () => () => css`
  -webkit-text-stroke: 2px #000;
  color: transparent;
`;
