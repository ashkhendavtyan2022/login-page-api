import React from "react";
import {useGlobalContext} from "../Context";
import {GuestPages} from "../GuestPages";
import {Admin} from "../AdminPage";
import {useEffect} from "react";


export const AppComponent = ()=>{
    const {token,setToken} = useGlobalContext()

    useEffect(()=>{
        let x = localStorage.getItem("token")
        if(x){
            setToken(x)
        }
    },[])

    return <>
        {token? <GuestPages /> : <Admin />}
    </>
}