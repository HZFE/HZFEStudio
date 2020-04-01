import React from 'react';
import styled from 'styled-components';

import { menu } from '../../config';

const MenuBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${menu.length}, max-content);
  grid-column-gap: 100px;
  font-weight: 500;
`;

const MenuItem = styled.div`
`;

const MenuLink = styled.a`
`;

const Menu = () => (
  <MenuBox>
    {
      menu.map((item) => (
        <MenuItem key={item.title}>
          <MenuLink>{item.title}</MenuLink>
        </MenuItem>
      ))
    }
  </MenuBox>
);

export default Menu;
