"use client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RoutState } from "../../Redux/store";
import {
  BuyBtn,
  Category,
  Container,
  Description,
  Details,
  Image,
  ImagePlace,
  Main,
  Price,
  Title,
} from "@/app/StyledComponent/ListItem";
import Header from "@/app/Header";
import { MdStarRate } from "react-icons/md";
import {
  AddToSavedList,
  DeleteItem,
  Plus,
  SavedTypes,
} from "@/app/Redux/createslice";

export default function ListItems({ params }: { params: { id: number } }) {
  const select = useSelector((state: RoutState) => state.shop);
  const Find: any = select.Items.find((elem: any) => elem.id === +params.id);
  const [check, setCheck] = useState<boolean>(false);
  const dispatch = useDispatch();

  const newList = () => {
    const isListed = select.Items.find((elem: any) => elem.id === +params.id);
    if (isListed) {
      let items: SavedTypes = {
        id: Find.id,
        category: Find.category,
        image: Find.image,
        price: Find.price,
        number: 1,
      };
      dispatch(AddToSavedList(items));
    }
  };
  return (
    <Container>
      <Header />
      <Main>
        <ImagePlace>
          <Image src={Find && Find.image} />
        </ImagePlace>
        <Details>
          <Title>{Find && Find.title}</Title>
          <Description>{Find && Find.description}</Description>
          <Category>
            <div>Category : {Find && Find.category}</div>{" "}
            <div style={{ display: "flex" }}>
              {Find && Find.rating.rate} <MdStarRate />
            </div>
          </Category>
          <Price>Price : {Find && Find.price} $</Price>
          <BuyBtn
            onClick={() => {
              if (
                !select.SavedList.find((elem: any) => elem.id === +params.id)
              ) {
                dispatch(Plus(1));
                newList();
              }
            }}
            style={
              select.SavedList.find((elem: any) => elem.id === +params.id)
                ? { backgroundColor: "gray" }
                : { backgroundColor: "red" }
            }
          >
            {select.SavedList.find((elem: any) => elem.id === +params.id) ? (
              <>Buyed</>
            ) : (
              <>Buy</>
            )}
          </BuyBtn>
        </Details>
      </Main>
    </Container>
  );
}
