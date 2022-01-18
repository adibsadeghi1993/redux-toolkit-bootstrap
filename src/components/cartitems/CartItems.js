import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import "./CartItems.css"
import { useDispatch } from "react-redux";
import { TotalPrice } from "../../redux/reducers/ProductReducer";
import { getProductsFromLocalStorage, getTotalPriceFromLocalStorage } from "../../services/ProductServices";


const CartItems = () => {
    const dispatch = useDispatch()

    const {cartItems} = useSelector(state => state.products)
  
//   const cartItems=getProductsFromLocalStorage()
  console.log(CartItem)
  
  dispatch(TotalPrice())
//   const {totalPrice} = useSelector(state => state.products)
  const  totalPrice  = getTotalPriceFromLocalStorage();

 
 
  return (
    <div>
      <Header />
     <div  className="container-xxl px-md-4 mt-4">
     {cartItems?.length === 0 ? (
        <div>
            <p>شما محصولی انتخاب نکرده اید.</p>
            <Link to="/" className="text-decoration-none"><span>بازشگت به صفحه محصولات</span></Link>
        </div>
      ) : (
        <div className="row gx-3 gy-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 px-md-3">
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
      {cartItems.length>0? <div className="px-3 my-4">
        <div class="card  checkout text-center">
  <div class="card-header">
    تسویه حساب
  </div>
  <div class="card-body">
    <h5 class="card-title">مجموع قیمت ها:{totalPrice}</h5>
    <Link to="/signup?from=checkout" class="btn btn-primary mt-3">ثبت سفارش</Link>
  </div>
 
</div>
      </div>:null}
     </div>
    </div>
  );
};

export default CartItems;
