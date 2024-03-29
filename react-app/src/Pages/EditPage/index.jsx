import React from "react";
import "./style.css"
import { SetUser, UpdateUser } from "../../Platform/Api";
import { useGlobalContext } from "../../Context";

export const EditPage = () => {
  const {profile, setProfile, token, setToken, arr, setArr} = useGlobalContext();


  const handleSubmit = (e) => {
    // e.preventDefault();
    // e.target.reset();

    setProfile({...profile,[e.target.name] : e.target.value})
  };

  const uploadImage = (e) => {
    const element = e.currentTarget
    const fileList = element.files;
    if (fileList && fileList?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setProfile({...profile, profileIMG:reader.result})
      });
      reader.readAsDataURL(fileList[0]);
    }
  }

  const SetList = async () => {
    delete profile._id;
    const result = await UpdateUser(token, profile)
    if(result.data) {
      console.log(result.data)
    } else {
      console.log("error")
    }
  }
  console.log(token)
  console.log(arr)


  // const SetList = async () => {
  //   const result = await SetUser(profile)
  //   if(result.data) {
  //     console.log(result.data)
  //   } else {
  //     console.log("error")
  //   }
  // };

  return (
      <div className="form-container">
        {console.log(profile)}
          <div className="form-wrapper">
            <div className="form-divs">
              <div className="form">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  name="firstname"
                  defaultValue={profile.firstname}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  name="lastname"
                  defaultValue={profile.lastname}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  name="age"
                  className="input"
                  placeholder="Age"
                  defaultValue={profile.age}
                  onChange={handleSubmit}                />
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <div className="gender-box">
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="male"
                      defaultValue={profile.gender}
                      onChange={handleSubmit}
                    />
                    <label htmlFor="">Male</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="female"
                      defaultValue={profile.gender}
                      onChange={handleSubmit}
                    />
                    <label htmlFor="">Female</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-divs">
              <div>
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Position"
                  name="position"
                  defaultValue={profile.position}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  defaultValue={profile.email}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone Number"
                  defaultValue={profile.phone}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <label htmlFor="">Date of Birth</label>
                <input
                  type="date"
                  name="birthday"
                  className="input"
                  placeholder="dd.mm.yy"
                  aria-describedby="date-format"
                  min="1900-03-01"
                  max="2031-01-01"
                  defaultValue={profile.birthday}
                  onChange={handleSubmit}
                />
              </div>
              <div>
                <p>Profile Image</p>
                <input
                  type="file"
                  className="input file-upload"
                  name="picture"
                  accept="image/*"
                  defaultValue={profile.profileIMG}
                  onChange={uploadImage}
                  
                  // {e => setProfile({...profile, profileIMG: e.target.files[0] })}
                />
              </div>
              <button className="form-button" onClick={SetList}>Submit Changes</button>
            </div>
          </div>
      </div>
  );

};
  