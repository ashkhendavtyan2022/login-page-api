import React from "react";
import "./style.css";
import { useGlobalContext } from "../../Context";
  
export const ProductPage = () => {
    const { profile, setProfile } = useGlobalContext();
    const {firstname, lastname, age, position, gender, email, phone, birthday, profileIMG } = profile;

    return (
      <div className="product-container">
        <h2>Profile Details</h2>
        <div className="product-box">
          <div className="person-img">
                {
                    // to add image from local, I used URL.createObjectURL(...imgFromContext)
                    profileIMG && (
                      <img src={URL.createObjectURL(profileIMG)} alt="Profile IMG" />
                    )
                  }
          </div>
          <div className="other-details">
            <div>
                Name: {firstname} {lastname}
            </div>
            <div>Position: {position}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Date of Birth: {birthday}</div>
          </div>
          
        </div>
    </div>
    )
};
  