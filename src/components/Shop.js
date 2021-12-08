import Loader from "./Loader";
import React, { useEffect, useContext } from "react";
import { API_URL, API_KEY } from "../config";
import GoodList from "./GoodList";
import { shopContext } from "../Context";
import Cart from "./Cart";
import BasketMadalca from "./BasketMadalca";

export default function Shop() {
  const {setGoods, loading, order, isBasketShow}= useContext(shopContext)

  
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <div className=" container content">
      <Cart quantite={order.length} />
      {loading ? (
        <Loader />
      ) : (
        <GoodList/>
      )}
      {isBasketShow && (
        <BasketMadalca/>
      )}
    </div>
  );
}
