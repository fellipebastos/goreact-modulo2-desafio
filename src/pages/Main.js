import React from 'react';
import styled from 'styled-components';

// Import assets
import logo from '../assets/logo.png';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Form = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background-color: #63f5b8;
    border: 0;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
    cursor: pointer;

    &:hover {
      background-color: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
