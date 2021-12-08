import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import shoe from "../assets/shoe.jpg";
import Range from "../components/Range"
import Select from "../components/Select"
import Sort from "../components/Sort"
import Search from "../components/Search"
import Checkboxes from "../components/Checkboxes";

const Home = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);
  const [select, setSelect] = useState("");
  const [sort, setSorted] = useState("");
  const [range, setRange] = useState([27,79]);
  const [max, setMax] = useState(null);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header />
      <div className="container-xxl  px-4  mt-4">
          

       <div className="row ">
           <div className="col-md-2 min-vh-100 border-end">
              <Range range={range} setRange={setRange}/>
              <Select select={select} setSelect={setSelect}/>
              <Sort sort={sort} setSorted={setSorted}/>
              <Search search={search} setSearch={setSearch}/>
              <Checkboxes setCheckedValue={setCheckedValue} checkedValue={checkedValue}/>
           </div>
           <div className="col-md-10">

           </div>

       </div>
         
          
        </div>
      </div>
    
  );
};

export default Home;
