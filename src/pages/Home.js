import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import shoe from "../assets/shoe.jpg";
import Range from "../components/Range";
import Select from "../components/Select";
import Sort from "../components/Sort";
import Search from "../components/Search";
import Checkboxes from "../components/Checkboxes";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  getAllProducts,
} from "../redux/reducers/ProductReducer";
import Cart from "../components/Cart";
import { productList } from "../productlist/productList";
import SwitchComponent from "../components/Switch";

const Home = () => {
  const dispatch = useDispatch();
  const { products,filteredProducts } = useSelector((state) => state.products);
  const { mode } = useSelector((state) => state.switch);
  console.log(mode)
  const [checkedValue, setCheckedValue] = useState([]);
  const [select, setSelect] = useState("");
  const [sort, setSorted] = useState("");
  const [range, setRange] = useState([]);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getAllProducts(productList));
  }, []);

  useEffect(() => {
   
    const maximum = Math.max(...products?.map((item) => item.mainPrice));
    const min = Math.min(...products?.map((item) => item.mainPrice));
    setMax(maximum);
    setMin(min);
    setRange([min, maximum]);
   
  }, [products]);

  useEffect(() => {
    dispatch(
      filterProducts({
        select: select,
        range: range,
        sort: sort,
        search: search,
        checkedValue: checkedValue,
      })
    );
  }, [checkedValue, select, range, search, sort]);
  return (
    <div style={{backgroundColor:`${mode?"#263238":"#eceff1"}`}}>
      <Header />
      <div className="container-xxl  px-4  mt-4 ">
        <div className="row ">
          <div className=" col-sm-6 col-md-4 col-lg-3 ">
           <div style={{backgroundColor:`${mode?"#455a64":"#e0e0e0"}`,color:`${mode?"white":"black"}`}} className="filtered_section  px-2 py-3 rounded">
           <Search search={search} setSearch={setSearch} />
           <Range range={range} setRange={setRange} max={max} min={min} />
            <Select select={select} setSelect={setSelect} />
            <Sort sort={sort} setSorted={setSorted} />
          
            <Checkboxes
              setCheckedValue={setCheckedValue}
              checkedValue={checkedValue}
            />
           
           </div>
          </div>
          <div className="col-sm-6 col-md-8 col-lg-9">
            <div className="row row-cols-1  gy-3 row-cols-sm-1 row-cols-md-2  row-cols-lg-3">
              {filteredProducts.map((p) => {
                return (
                  <Cart
                    product={p}
                    key={p.id}
                    id={p.id}
                    src={p.src}
                    desc={p.description}
                    dPrice={p.dPrice}
                    mainPrice={p.mainPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
