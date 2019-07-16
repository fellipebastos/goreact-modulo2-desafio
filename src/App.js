import React, { Fragment } from 'react';

// Import Styles
import GlobalStyle from './styles/global';

// Import Components
import Main from './pages/Main/index';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
