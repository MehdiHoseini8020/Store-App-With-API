import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const Details = styled.div`
  height: 95%;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Items = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
`;

export const ItemImg = styled.img`
  height: 180px;
  width: 200px;
  background-color: red;
`;

export const ItemsPrice = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const ItemsCounter = styled.div`
  height: 50px;
  width: 80%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: darkgray;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: black;
  }
`;

export const CounterIcons = styled.div`
  height: 80%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Increase = styled.div`
  height: 30%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #000;
  border: 1px solid black;
`;

export const Decrease = styled.div`
  height: 30%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #000;
  border: 1px solid black;
`;
