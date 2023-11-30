import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const LeftDetails = styled.div`
  height: 80%;
  width: 55%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const SignUpIn = styled.div`
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid black;
`;

export const Basket = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
`;

export const CenterSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CenterDetails = styled.div`
  height: 55%;
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 70%;
  font-size: 18px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  outline: none;
  color: #fff;
  background-color: gray;

  &::placeholder {
    color: white;
  }
`;

export const SearchPlace = styled.div`
  height: 100%;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: gray;
`;

export const RightSection = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
export const Num = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ff00004d;
  position: absolute;
  left: 25%;
  top: 60%;
  color: black;
`;
