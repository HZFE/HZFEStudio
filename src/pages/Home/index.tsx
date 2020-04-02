import React from 'react';

import './index.pcss';
import Header from '../../components/Header';
import HeroHeader from '../../components/HeroHeader';
import Cover from '../../components/Cover';
import Team from '../../components/Team';
import Work from '../../components/Work';

export default () => (
  <div>
    <Header />
    <HeroHeader />
    <Cover />
    <Team />
    <Work />
  </div>
);
