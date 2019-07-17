import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover .dismiss,
    &:hover .refresh {
      opacity: 1;
    }

    .dismiss {
      position: absolute;
      top: 10px;
      right: 10px;
      color: red;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .refresh {
      position: absolute;
      top: 10px;
      left: 10px;
      color: lightblue;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      .icon {
        color: #999;
        margin-right: 12px;
      }

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(odd) {
        background: #f5f5f5;
      }
    }
  }
`;
