import React, {useState} from "react";
import "./style.css"
import {GetUsers, SetUser} from "../Platform/Api";
import {useGlobalContext} from "../Context";


export const Admin = ()=>{
    const {profile, setProfile, arr, setArr} = useGlobalContext()

    const Change = (e)=>{
        setProfile({...profile,[e.target.name]:e.target.value})
    }

    const validation = ()=>{
        let valid = true

        return valid
    }
    const Call = async ()=>{
        if(validation()) {
            const result = await SetUser(profile)
            if (result.data) {
                localStorage.setItem("token", result.data._id)
                // localStorage.setItem("token",lis[0]._id)
                window.location.reload()
                // console.log(result.data)
            }
        }
    }

    const Sign = async ()=>{
        const result = await GetUsers()
        if(result.data){
            console.log(result.data)
            setArr(result.data.filter(x => x.email === profile.email))
            Set(result.data[0]._id)
        }

    }

    const Set = (y)=>{
        if(arr[0]){
            // Set(result.data._id)
            console.log(y)
            localStorage.setItem("token", y)
            window.location.reload()
        }

    }

    return <div className="P-admin">
        {console.log(arr)}
        <input type="text" name="email" onChange={Change}/>
        <input type="password"/>
        <button onClick={Sign}>Sign in</button>
        <button onClick={Call}>Registration</button>
    </div>
}