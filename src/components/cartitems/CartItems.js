import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";


const CartItems = () => {
  const { cartItems } = useSelector((state) => state.products);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <CartItem key={item.id} dPrice={item.dPrice} id={item.id} desc={item.description} mainPrice={item.mainPrice}/>
        );
      })}
    </div>
  );
};

export default CartItems;
