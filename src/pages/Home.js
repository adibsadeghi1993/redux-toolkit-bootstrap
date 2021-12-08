import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";
import shoe from "../assets/shoe.jpg";
import Range from "../components/Range"

const Home = () => {
    const [filteredPersons, setFilteredPersons] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);
  const [select, setSelect] = useState("");
  const [gender, setGender] = useState("");
  const [range, setRange] = useState("");
  const [max, setMax] = useState(null);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header />
      <div className="container-xxl  px-4  mt-4">
          

       <div className="row ">
           <div className="col-md-2">
              <Range/>
           </div>
           <div className="col-md-10"></div>

       </div>
         
          
        </div>
      </div>
    
  );
};

export default Home;
