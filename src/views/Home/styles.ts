import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  width: 93%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 605px) {
    width: 97%;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 100px;
  text-align: center;
  background: #15418c;
  color: white;
  font-size: 17px;
  font-weight: 600;
  height: 40px;
  :hover,
  :active {
    opacity: 0.8;
    cursor: pointer;
  }
`;
