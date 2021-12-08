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
import { fetchProducts } from "../redux/reducers/ProductReducer";
import Cart from "../components/Cart";

const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);
  const [select, setSelect] = useState("");
  const [sort, setSorted] = useState("");
  const [range, setRange] = useState([27,100]);
  const [max, setMax] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchProducts())
    setFilteredProducts(products)
  }, [])

  useEffect(() => {
      
    setFilteredProducts(products)
    const maximum = Math.max(...products?.map((item) => item.mainPrice));
    setMax(maximum);
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
           <div className="col-md-3 filtered_section">
              <Range range={range} setRange={setRange} max={max}/>
              <Select select={select} setSelect={setSelect}/>
              <Sort sort={sort} setSorted={setSorted}/>
              <Search search={search} setSearch={setSearch}/>
              <Checkboxes setCheckedValue={setCheckedValue} checkedValue={checkedValue}/>
           </div>
           <div className="col-md-9">
              <div className="row row-cols-1 gy-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
              {filteredProducts.map((p)=>{
                   return <Cart key={p.id} id={p.id} src={p.src} desc={p.description} dPrice={p.dPrice} mainPrice={p.mainPrice}  />
               })}
              </div>
             

           </div>

       </div>
         
          
        </div>
      </div>
    
  );
};

export default Home;
