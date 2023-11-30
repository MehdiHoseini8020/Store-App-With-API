import React from "react";
import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import {
  Basket,
  CenterDetails,
  CenterSection,
  Container,
  LeftDetails,
  LeftSection,
  Num,
  RightSection,
  SearchInput,
  SearchPlace,
  SignUpIn,
} from "./StyledComponent/Header";
import { RoutState } from "./Redux/store";
import { useSelector } from "react-redux";

export default function Header() {
  const select = useSelector((state: RoutState) => state.shop);
  return (
    <Container>
      <LeftSection>
        <LeftDetails>
          <Link href="/Buy">
          <Num>{select.number}</Num>
            <Basket>
              <SlBasket />
            </Basket>
          </Link>
          <SignUpIn> login | Sign in</SignUpIn>
        </LeftDetails>
      </LeftSection>
      <CenterSection>
        <CenterDetails>
          <SearchPlace>
            <IoIosSearch />
          </SearchPlace>
          <SearchInput placeholder="Search" />
        </CenterDetails>
      </CenterSection>
      <RightSection>
        <strong style={{ color: "red", fontSize: "20px" }}>Reyan</strong>
        <strong style={{ color: "black" }}>Store</strong>
      </RightSection>
    </Container>
  );
}
