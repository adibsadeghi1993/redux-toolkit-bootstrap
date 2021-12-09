import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
    const {totalPrice} = useSelector(state => state.products)
    const shipingPrice=totalPrice-(0.85)*totalPrice
  return (
    <div className="m-5">
      <div class="card text-center">
        <div class="card-header">ثبت خرید</div>
        <div class="card-body">
          <h5 class="card-title">قیمت کل محصولات به تومان :{totalPrice}</h5>
          <h5 class="card-title">هزینه ارسال به تومان: {Math.floor(shipingPrice)}</h5>
          <h5 class="card-title">قیمت کل به تومان: {Math.floor(totalPrice+shipingPrice)} </h5>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
