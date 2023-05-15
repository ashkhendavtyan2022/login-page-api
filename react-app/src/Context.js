import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [arr,setArr] = useState([])
  const [token,setToken] = useState()
  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    position: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    profileIMG: '',
  })

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
        token,
        setToken,
          arr,
          setArr
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
