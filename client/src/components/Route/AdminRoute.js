import { useState,useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute(){
    const [ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();

    useEffect(() => {
   const authCheck= async () => {
    const res=await axios.get('/api/v1/auth/admin-auth');
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
    return ok ? <Outlet/>: <Spinner path =''/>
}