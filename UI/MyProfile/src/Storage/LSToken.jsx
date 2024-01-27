import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// we are going to use context API
export const TokenGEN = createContext();

export const TokenProvider = ({ children }) => {
// const navgate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState('');
  const [empfetch, setEmpfetch] = useState([]);
  const [pageReloaded, setPageReloaded] = useState(false); // Track reload status
  const TokenStoreLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("Token", serverToken);
    // userAuth();
  };
  let isLogedIn = !!token;
  console.log("logedin", isLogedIn);
  const userLogOut = () => {
    setToken("");
    return localStorage.removeItem("Token");
    // userAuth();
  };
  const userAuth = async () => {
    try {
      const response = await axios.get("http://localhost:3331/user", {
          // method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response);

      // const responces = await fetch("http://localhost:3331/user", {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
     if (response.status === 200) {
      const data = response.data;
      setUser(data.userData);
    }
  } catch (error) {
    // console.log("Auth error found",);
  }
  };
  
  // to get Employess data
  const empData = async () => {
    try {
      const responces = await fetch("http://localhost:3331/api/employess", {
        method: "GET",
      });
      if (responces.ok) {
        const employDAta = await responces.json();
        setEmpfetch(employDAta);
        // console.log(employDAta);
      }
    } catch (error) {
      console.log("erroe to fetc emp data",error);
    }
  };

  const refreshPage = () => {
    if (!pageReloaded) {
          window.location.reload();
          setPageReloaded(true);
        // Delay the success toast by 1000 milliseconds (1 second)
    }
  };

  useEffect(() => {
    empData();
    userAuth();
  }, [isLogedIn]);

  return (
    <TokenGEN.Provider
      value={{ isLogedIn, TokenStoreLS, userLogOut, user,empfetch, refreshPage,}}
    >
      {children}
    </TokenGEN.Provider>
  );
};
// make acoustome hook
export const useToken = () => {
  const token = useContext(TokenGEN);
  if (!token) {
    throw new Error("some error in the mainjs page chek  it out");
  }
  return token;
};
