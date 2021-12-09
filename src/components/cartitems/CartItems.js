import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import "./CartItems.css"

const CartItems = () => {

  const { cartItems } = useSelector((state) => state.products);

  const totalPrice=cartItems.reduce((a,c)=>a+c.dPrice,0)
  console.log(totalPrice)
  return (
    <div>
      <Header />
     <div className="container-xxl px-md-4 mt-4">
     {cartItems.length === 0 ? (
        <div>
            <p>شما محصولی انتخاب نکرده اید.</p>
            <Link to="/"><span>بازشگت به صفحه محصولات</span></Link>
        </div>
      ) : (
        <div className="row gx-3 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 px-3">
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                dPrice={item.dPrice}
                id={item.id}
                desc={item.description}
                mainPrice={item.mainPrice}
                qty={item.qty}
              />
            );
          })}
        </div>
      )}
      {cartItems.length>0? <div className="px-3 mt-4">
        <div class="card  checkout text-center">
  <div class="card-header">
    تسویه حساب
  </div>
  <div class="card-body">
    <h5 class="card-title">مجموع قیمت ها:{totalPrice}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
 
</div>
      </div>:null}
     </div>
    </div>
  );
};

export default CartItems;
