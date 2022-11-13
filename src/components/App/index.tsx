import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

import { Home } from 'components/Views';
import GlobalStyles from 'components/styles';

import { StyledAppWrapper } from './styles';

interface AppPropTypes {
  className?: string;
}

const App: React.FC<AppPropTypes> = ({ className }: AppPropTypes) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledAppWrapper className={className}>
      <Home />
    </StyledAppWrapper>
  </ThemeProvider>
);

export default App;
