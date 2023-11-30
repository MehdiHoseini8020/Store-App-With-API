"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  Container,
  Details,
  ItemImg,
  Items,
  ItemsCounter,
  ItemsPrice,
} from "../StyledComponent/Main";
import { RoutState } from "../Redux/store";
import { GetData } from "../Redux/createslice";

export default function Main() {
  const select = useSelector((state: RoutState) => state.shop);
  const dispatch = useDispatch();
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    async function getDataa() {
      setLoad(true);
      await fetch("https://fakestoreapi.com/products")
        .then(async (res) => {
          if (res.ok) {
            let test = await res.json();
            dispatch(GetData(test));
          }
          setLoad(false);
          return res.json();
        })
        .catch((err) => {
          setLoad(false);
          console.error(err);
        });
    }
    getDataa();
  }, []);
  return (
    <Container>
      {load ? (
        <>
          <div
            style={{
              height: "800px",
              width: "100%",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ color: "black", fontSize: "25px", fontWeight: "500" }}
            >
              Please Wait ...
            </div>
          </div>
        </>
      ) : (
        <>
          <Details>
            {select.Items &&
              select.Items.map((item: any) => (
                <Link href={`MainLanding/${item.id}`}>
                  <Items>
                    <ItemImg src={item.image} />
                    <ItemsPrice>Price : {item.price} $ </ItemsPrice>
                    <ItemsCounter>Buy</ItemsCounter>
                  </Items>
                </Link>
              ))}
          </Details>
        </>
      )}
    </Container>
  );
}
