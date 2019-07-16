import React, { Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/global';

const Title = styled.h1`
  color: purple;
  font-size: 32px;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App" />
  </Fragment>
);

export default App;
