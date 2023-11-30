import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  background-color: red;
`;
export const Main = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: white;
`;

export const ImagePlace = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  background-color: white;
`;
export const Image = styled.img`
  height: 300px;
  width: 200px;
  margin-top: 50px;
`;
export const Details = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  height: 20%;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
  color: black;
`;
export const Description = styled.div`
  height: 45%;
  width: 90%;
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
  color: black;
`;

export const Category = styled.div`
  height: 10%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  margin-top: 30px;
  color: black;
`;

export const Price = styled.div`
  height: 100px;
  width: 100%;
  display: contents;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
export const BuyBtn = styled.div`
  height: 55px;
  width: 30%;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  background-color: red;
`;
export const Counter = styled.div`
  height: 50px;
  width: 15%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Decrese = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  cursor: pointer;
  font-size: 18px;
`;
