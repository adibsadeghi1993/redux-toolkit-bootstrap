import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import shoe from "../assets/shoe.jpg";
import Range from "../components/Range"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container-xxl px-3  mt-4">
          <Range/>

       {/* <div className="row">
           <div className="col-md-8">
              <Range/>
           </div>
           <div className="col-md-4"></div>

       </div> */}
         
          
        </div>
      </div>
    
  );
};

export default Home;
