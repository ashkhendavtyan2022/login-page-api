import React, {useState} from "react";
import "./style.css";
import { GetUser } from "../../Platform/Api";
import { useGlobalContext } from "../../Context";


export const Header = () => {
  const [user, setUser] = useState({});
  
  const {profile, setProfile} = useGlobalContext()

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
        <img src={user.profileIMG} alt=""/>
        {/* {
          //Use URL.createObjectURL(...imgFromContext) to add image from local
          user.profileIMG && (
            <img src={URL.createObjectURL(user.profileIMG)} alt="Profile IMG" />
          )
        } */}
      </div>
      <div className="details-div">
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.position}</p>
        <button onClick={Get}>Click Get</button>
      </div>
    </div>
  )
};
