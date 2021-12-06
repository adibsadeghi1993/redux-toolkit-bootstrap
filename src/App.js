import "./App.css";
import Range from "./components/Range";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/signup" element={<Signup />}/>
     <Route path="/login" element={<Login />}/>
     </Routes>
    </div>
  );
}

export default App;
