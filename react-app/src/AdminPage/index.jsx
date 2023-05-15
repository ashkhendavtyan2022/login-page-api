import React, {useState} from "react";
import "./style.css"
import {GetUsers, SetUser} from "../Platform/Api";
import {useGlobalContext} from "../Context";


export const Admin = ()=>{
    const {profile, setProfile, arr, setArr} = useGlobalContext()
    const [error, setError] = useState({
        errorEmail: "",
        errorPassword: "", 
    })

    const Change = (e)=>{
        setProfile({...profile,[e.target.name]:e.target.value})
    }

    const validation = ()=>{
        let valid = true

        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

        const errors = {
            errorEmail: "",
            errorPassword: "",
        }

        if(!profile.email) {
            errors.errorEmail = "Email is Required!"
            valid = false
        } else if (regex.test(profile.email) === false) {
            errors.errorEmail = "Email is Not Valid!"
            valid = false
        } else {
            errors.errorEmail = " "
            valid = true
        }


        if(!profile.password) {
            errors.errorPassword = "Password is Required!"
            valid = false
        } 
        // else if (profile.password.length < 8) {
        //     errors.errorPassword = "Password must be at least 8 chars long!"
        //     valid = false
        // } else if (uppercaseRegExp.test(profile.password) === false) {
        //     errors.errorPassword = "Password must contain at least one uppercase!"
        //     valid = false
        // } else if (digitsRegExp.test(profile.password) === false) {
        //     errors.errorPassword = "Password must contain at least one digit!"
        //     valid = false
        // } else if (specialCharRegExp.test(profile.password) === false) {
        //     errors.errorPassword = "Password must contain at least one special character!"
        //     valid = false
        // } 
        // else {
        //     errors.errorPassword = ""
        //     valid = true
        // }

        setError(errors)

        return valid
    }

    const Call = async ()=>{
        if(validation()) {
            const result = await SetUser(profile)
            if (result.data) {
                localStorage.setItem("token", result.data._id)
                window.location.reload()
            }
        }
    }

    const Sign = async ()=>{
        const result = await GetUsers()
        if(result.data){
            console.log(result.data)
            const arr = []
            arr.push(result.data.filter(x => x.email === profile.email))
            if(arr[0]){
                localStorage.setItem("token", arr[0][0]._id)
                window.location.reload()
            }
        }

    }

    return <div className="P-admin">
        {console.log(arr)}
        <input type="email" name="email" onChange={Change}/>
        <div className="errorMsg">{error.errorEmail ? <p>{error.errorEmail}</p> : null}</div>
        
        <input type="password" name="password" onChange={Change}/>
        <div className="errorMsg">{error.errorPassword ? <p>{error.errorPassword}</p> : null}</div>
        
        <button onClick={Sign}>Sign In</button>
        <button onClick={Call}>Register</button>
    </div>
}