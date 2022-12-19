import styled from "styled-components";

export const Card = styled.div`
  margin: 15px;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (max-width: 605px) {
    width: 250px;
    height: 300px;
    margin: 10px 10px;
  }
`;

export const Text = styled.p`
  word-wrap: break-word;
  margin: 15px;
  color: black;
  font-weight: 600;
  line-height: 23px;
  border-radius: 5px;
  text-align: left;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.8);
  span {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 14px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-radius: 15px;
  position: absolute;
  z-index: -1;
`;
