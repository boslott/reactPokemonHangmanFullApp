import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { StyledPage, Inner } from './PageStyles';
import theme from '../ThemeStyles/ThemeStyles';
import Meta from '../Meta/Meta';
import Header from '../Header/Header';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;