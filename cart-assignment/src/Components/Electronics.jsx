import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleElectronic from "./SingleElectronic";
import "../styles.css";
// import { AuthContext } from "../Contexts/AuthContextProvider";
//import datas from "../Components/data.json";

export default function Electronics() {
  // const { handleChange } = useContext(AuthContext);
  // handleChange();
  const [access, setAccess] = useState([]);
  

  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products/')
    .then((e)=>setAccess(e.data))
  },[])
  const arr=access.filter(item=>item.category==="electronics")
  console.log(arr);
  return (
    <div className="grid">
        {arr.map((item) => {
        return <SingleElectronic {...item} key={item.id} />;
      })} 
    </div>
  );
}