import "./App.css";
import React, { useEffect } from 'react';


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";
import { useDispatch} from "react-redux"
import { getDataFromLocalStorage } from "./services/AuthServices";
import { loginByLocalStorage } from "./redux/reducers/AuthReducer";
import Test from "./components/Range";
import CartItems from "./components/cartitems/CartItems";
import Checkout from "./components/Checkout";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   const data= getDataFromLocalStorage()
   dispatch(loginByLocalStorage(data))
  }, [])
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/signup" element={<Signup />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/cartItems" element={<CartItems />}/>
     <Route path="/checkout" element={<Checkout />}/>
     </Routes>
  
    </div>
  );
}

export default App;
