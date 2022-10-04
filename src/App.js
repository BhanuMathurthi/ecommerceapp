import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Home/Main";
import Laptops from "./components/laptops/laptop";
import EachLaptopDetail from "./components/laptops/singlelaptop";
import Navbar from "./components/Navbar";
import productdata from "./db.json";
import SingleMobile from "./components/mobiles/Eachmobile";
import Mobiles from "./components/mobiles/mobiles";
import Tvs from "./components/Tvs/Tvs";
import EachTv from "./components/Tvs/eachtv";

export const Productcontext = createContext();

function App() {
  const [data, setData] = useState(productdata);
  return (
    <>
      <Productcontext.Provider value={data}>
        <Navbar />
        <div style={{ marginTop: "3.3rem" }}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/mobiles" element={<Mobiles />}></Route>
            <Route path="/:id" element={<SingleMobile />}></Route>
            <Route path="/laptops" element={<Laptops />}></Route>
            <Route path="/laptop/:id" element={<EachLaptopDetail />}></Route>
            <Route path="/tvs" element={<Tvs />}></Route>
            <Route path="/tv/:id" element={<EachTv />}></Route> 
          </Routes>
        </div>
      </Productcontext.Provider>
    </>
  );
}

export default App;
