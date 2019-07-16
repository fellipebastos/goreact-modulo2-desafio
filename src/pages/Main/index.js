import React from 'react';

// Import assets
import logo from '../../assets/logo.png';

// Import Styles
import { Container, Form } from './styles';

// Import Components
import CompareList from '../../components/CompareList';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
