import React, {useEffect} from "react";
import "./style.css"
import { NavBar } from "./NavBar";
import {useGlobalContext} from "../../Context";
import {GetUser} from "../../Platform/Api";

export const Sidebar = () => {
    const {setProfile,setToken,token} = useGlobalContext()

    useEffect(()=>{
            let x = localStorage.getItem("token")
            if(x){
                setToken(x)
            }
    },[])

    useEffect(()=>{
        Getusers()
    },[])

    const Getusers = async ()=>{
        const result = await GetUser(token)
        if(result.data){
            setProfile(result.data)
        }
    }

  const Logout = () => {
    let x = localStorage.getItem("token")
    if(x){
      localStorage.removeItem("token")
      window.location.reload()
    }
  }

  return (
    <div className="sidebar">
      <NavBar />
      <button onClick={Logout}>Log Out</button>
    </div>
  );
};