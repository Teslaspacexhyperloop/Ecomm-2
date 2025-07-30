import { useState,useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute(){
    const [ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();

    useEffect(() => {
   const authCheck= async () => {
    const res=await axios.get('/api/v1/auth/user-auth');
    //hmlog default axios me token de rhe h isliye yhase hta diye h
    // {
    //     headers:{
    //         "Authorization":auth?.token
    //     }
    // }
    // )
  if(res.data.ok){
    setOk(true)
  }else{
    setOk(false)
  }


   };
   if(auth?.token) authCheck();



    } ,[auth?.token]);
    return ok ? <Outlet/>: <Spinner path='/'/>//suppos ehm user se login h or admin ka dashboard access krn chahe by changing the url then path nahi dale the to hmko sorf login page pe redirect karta tha aise hmko agar login h tohome page pe redirect karega
}