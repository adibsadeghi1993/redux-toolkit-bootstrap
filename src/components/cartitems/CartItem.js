import React from 'react'

import watch1 from "../../assets/ساعت هوشمند شیاومی.jpg";
import watch2 from "../../assets/ساعت 5.jpg";
import watch3 from "../../assets/ساعت4.jpg";
import shoe1 from "../../assets/shoe.jpg";
import shoe2 from "../../assets/کفش راحتی مردانه مدل PART-SO.jpg";
import shoe3 from "../../assets/کفش مردانه مدل SHEILD.jpg";
import laptop1 from "../../assets/لپ تاپ 1.jpg";
import laptop2 from "../../assets/لپ تاپ 2.jpg";
import laptop3 from "../../assets/لپ تاپ 3.jpg";


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

const CartItem = ({id,desc,mainPrice,dPrice,qty}) => {
    return (
        <div>
            <div class="card">
            <div class="product_container mb-2 d-flex justify-content-center ">
              <img
                style={{ width: "60%" }}
                src={images[id - 1]}
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
            <div className="mt-1 mb-1 d-flex justify-content-center">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg></span>
<span className="px-4">{qty}</span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
</svg></span>
            </div>
          </div>
        </div>
    )
}

export default CartItem
