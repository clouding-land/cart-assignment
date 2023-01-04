import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleAccessory from "./SingleAccessory";
import "../styles.css";
// import { AuthContext } from "../Contexts/AuthContextProvider";
//import datas from "../Components/data.json";

export default function Accessories() {
  // const { handleChange } = useContext(AuthContext);
  // handleChange();
  const [access, setAccess] = useState([]);
  

  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products/')
    .then((e)=>setAccess(e.data))
  },[])
  const arr=access.filter(item=>item.category==="jewelery")
  console.log(arr);
  return (
    <div className="grid">
        {arr.map((item) => {
        return <SingleAccessory {...item} key={item.id} />;
      })} 
    </div>
  );
}