import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import shoe from "../assets/shoe.jpg";
import Range from "../components/Range"
import Select from "../components/Select"
import Sort from "../components/Sort"
import Search from "../components/Search"
import Checkboxes from "../components/Checkboxes";
import { useDispatch,useSelector } from "react-redux";
import { getAllProducts } from "../redux/reducers/ProductReducer";
import Cart from "../components/Cart";
import { productList } from "../productlist/productList";

const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);
  const [select, setSelect] = useState("");
  const [sort, setSorted] = useState("");
  const [range, setRange] = useState([]);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
   dispatch(getAllProducts(productList))
    
  }, [])

  useEffect(() => {
      
    setFilteredProducts(products)
    const maximum = Math.max(...products?.map((item) => item.mainPrice));
    const min = Math.min(...products?.map((item) => item.mainPrice));
    setMax(maximum);
    setMin(min)
    setRange([min,maximum])
    // setRange(maximum)
   
  }, [products])

 

  useEffect(() => {
    console.log("useeffect runs");

    const mainProducts = [...products];
    console.log(mainProducts);

    const filteredAllProducts = mainProducts.filter((product) => {
      if (search && !product.title.includes(search)) {
        return false;
      }
      if (checkedValue.length && !checkedValue.includes(product.title)) {
        return false;
      }
      if (range && product.mainPrice < range[0] ) {
        return false;
      }
      if (range && product.mainPrice > range[1] ) {
        return false;
      }
      if (select === "all") {
        return true;
      }
      if (select && product.category !== select) {
        return false;
      }

      return true;
    });

    if(sort && sort==="1"){
        setFilteredProducts(filteredAllProducts.sort((a,b)=>a.mainPrice-b.mainPrice));
    }
    if(sort && sort==="0"){
        setFilteredProducts(filteredAllProducts.sort((a,b)=>b.mainPrice-a.mainPrice));
    }
    if(!sort){
        setFilteredProducts(filteredAllProducts);  
    }
    console.log(filteredAllProducts);

  
  }, [checkedValue, select, range, search,sort]);
  return (
    <div>
      <Header />
      <div className="container-xxl  px-4  mt-4">
          

       <div className="row ">
           <div className=" col-sm-6 col-md-4 col-lg-3 filtered_section">
              <Range range={range} setRange={setRange} max={max} min={min}/>
              <Select select={select} setSelect={setSelect}/>
              <Sort sort={sort} setSorted={setSorted}/>
              <Search search={search} setSearch={setSearch}/>
              <Checkboxes setCheckedValue={setCheckedValue} checkedValue={checkedValue}/>
           </div>
           <div className="col-sm-6 col-md-8 col-lg-9">
              <div className="row row-cols-1 gy-3 row-cols-sm-1 row-cols-md-2  row-cols-lg-3">
              {filteredProducts.map((p)=>{
                   return <Cart product={p} key={p.id} id={p.id} src={p.src} desc={p.description} dPrice={p.dPrice} mainPrice={p.mainPrice}  />
               })}
              </div>
             

           </div>

       </div>
         
          
        </div>
      </div>
    
  );
};

export default Home;
