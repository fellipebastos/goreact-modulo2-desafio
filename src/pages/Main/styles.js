import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
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
