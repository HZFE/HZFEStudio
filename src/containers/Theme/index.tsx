import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../config/theme/base';

export const ThemeWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
