import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;
export const TextNone = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
`;
export const Counter = styled.div`
  height: 20px;
  width: 100px;
  font-size: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
`;
export const Delete = styled.div`
  height: 10px;
  width: 100px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
`;
