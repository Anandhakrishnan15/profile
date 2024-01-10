import { createContext, useContext, useEffect, useState } from "react";

// we are going to use context API
export const TokenGEN = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState("");
  const TokenStoreLS = (serverToken) => {
    return localStorage.setItem("Token", serverToken);
  };
  let isLogedIn = !!token;
  // console.log("logedin", isLogedIn);
  const userLogOut = () => {
    setToken("");
    return localStorage.removeItem("Token");
  };
  const userAuth = async () => {
    try {
      const responces= await fetch("http://localhost:3331/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (responces.ok) {
        const data = await responces.json();
        // console.log('user data', data);
        setUser(data);
      }
    } catch (error) {
      console.log("Autho error found", error);
    }
  };

  useEffect(() => {
    userAuth();
  }, []);

  return (
    <TokenGEN.Provider value={{ isLogedIn, TokenStoreLS, userLogOut, user}}>
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
