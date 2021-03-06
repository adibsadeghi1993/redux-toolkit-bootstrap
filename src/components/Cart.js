import React from 'react'
import watch1 from "../assets/ساعت هوشمند شیاومی.jpg"
import watch2 from "../assets/ساعت 5.jpg"
import watch3 from "../assets/ساعت4.jpg"
import shoe1 from "../assets/shoe.jpg"
import shoe2 from "../assets/کفش راحتی مردانه مدل PART-SO.jpg"
import shoe3 from "../assets/کفش مردانه مدل SHEILD.jpg"
import laptop1 from "../assets/لپ تاپ 1.jpg"
import laptop2 from "../assets/لپ تاپ 2.jpg"
import laptop3 from "../assets/لپ تاپ 3.jpg"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/ProductReducer'
import "./Cart.css"

const images=[watch1,watch2,watch3,shoe1,shoe2,shoe3,laptop1,laptop2,laptop3]

const Cart = ({desc,mainPrice,dPrice,id,product}) => {
  const dispatch= useDispatch()

    const addHandler=(product)=>{
        console.log(product)
     dispatch(addToCart(product))
    }
    return (
        <div> <div class="card">
        <div class="product_container mb-2 d-flex justify-content-center ">
     
          <img
            style={{ width: "55%" }}
            src={images[id-1]}
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
          <div
            class="progress flex-row-reverse mt-4 mt-lg-3"
            style={{ height: "3px" }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "25%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="d-flex justify-content-between flex-row-reverse mt-2 mt-lg-3 ">
            <div>
              <span>
                <span class="me-2 ">6:20:50</span>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                </svg>
              </span>
            </div>
            <div>
              <span>53% فروش رفته</span>
            </div>
          </div>
          <button onClick={()=>addHandler(product)} className="btn btn-outline-warning w-100 mt-2 text-dark d-flex alin-items-center justify-content-center"><span className='me-1'>اضافه کردن به سبد خرید</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
          
          </button>
        </div>
      </div></div>
    )
}

export default Cart
