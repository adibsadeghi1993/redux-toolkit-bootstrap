import React from "react";
import watch1 from "../../assets/ساعت هوشمند شیاومی.jpg";
import watch2 from "../../assets/ساعت 5.jpg";
import watch3 from "../../assets/ساعت4.jpg";
import shoe1 from "../../assets/shoe.jpg";
import shoe2 from "../../assets/کفش راحتی مردانه مدل PART-SO.jpg";
import shoe3 from "../../assets/کفش مردانه مدل SHEILD.jpg";
import laptop1 from "../../assets/لپ تاپ 1.jpg";
import laptop2 from "../../assets/لپ تاپ 2.jpg";
import laptop3 from "../../assets/لپ تاپ 3.jpg";
import { useSelector } from "react-redux";

const images = [
  watch1,
  watch2,
  watch3,
  shoe1,
  shoe2,
  shoe3,
  laptop1,
  laptop2,
  laptop3,
];

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.products);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div class="card">
            <div class="product_container mb-2 d-flex justify-content-center ">
              <img
                style={{ width: "60%" }}
                src={images[item.id - 1]}
                class="card-img-top  "
                alt="..."
              />
            </div>
            <div class="card-body py-2">
              <p class="mb-3 ">{desc}</p>
              <p class="text-end mb-2 mb-lg-3">
                <span
                  class=" text-white px-2 px-lg-3 rounded-pill discount"
                  style={{ backgroundColor: "red" }}
                >
                  33%
                </span>
                <span class="me-1">
                  <del>{mainPrice}</del>
                </span>
              </p>
              <p class="text-end">
                <span class="me-2 fw-bolder">{dPrice}</span>
                <span>تومان</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
