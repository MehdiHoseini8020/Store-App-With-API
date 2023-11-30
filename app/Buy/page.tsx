"use client";
import React from "react";
import { Container, Counter, Delete, TextNone } from "../StyledComponent/Buy";
import Header from "../Header";
import { RoutState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Details, ItemImg, Items, ItemsPrice } from "../StyledComponent/Main";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { BuyDec, BuyPlus, Dec, DeleteItem } from "../Redux/createslice";
import { MdDeleteForever } from "react-icons/md";

export default function Page({ params }: { params: { id: number } }) {
  const select = useSelector((state: RoutState) => state.shop);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header />
      {select.SavedList.length === 0 ? (
        <TextNone>You have not products to buy !</TextNone>
      ) : (
        <Details>
          {select.SavedList.map((item, index) => {
            return (
              <Items>
                <ItemImg src={item.image} />
                <ItemsPrice>Price : {(+(item.price)*item.number).toFixed(3)} $ </ItemsPrice>
                <Counter>
                  <div
                    onClick={() => {
                      dispatch(BuyDec(index));

                    }}
                  >
                    <IoIosArrowDropdown />
                  </div>
                  {item.number}
                  <div
                    onClick={() => {
                      dispatch(BuyPlus(index));
                    }}
                  >
                    {" "}
                    <IoIosArrowDropup />
                  </div>
                </Counter>
                <Delete
                  onClick={() => {
                    dispatch(DeleteItem(item.id));
                    dispatch(Dec(1));
                  }}
                >
                  <MdDeleteForever />
                </Delete>
              </Items>
            );
          })}
        </Details>
      )}
    </Container>
  );
}
