import React, {useState} from "react";
import "./style.css";
import { GetUser } from "../../Platform/Api";
import { useGlobalContext } from "../../Context";


export const Header = () => {
    const {profile} = useGlobalContext()
    const {firstname, lastname, position, profileIMG} = profile

    const Get = async ()=>{
        const result = await GetUser("63c80aecd1a82b03e8b2926b")
        if(result.data){
            console.log(result.data)
        }else {
            console.log("Error")}
    }

  return (
    <div className="header-component">
      <div className="img-div">
        {
          //Use URL.createObjectURL(...imgFromContext) to add image from local
          profileIMG && (
            <img src={URL.createObjectURL(profileIMG)} alt="Profile IMG" />
          )
        }
      </div>
      <div className="details-div">
        <p>
          {firstname} {lastname}
        </p>
        <p>{position}</p>
      </div>
    </div>
  )
};
