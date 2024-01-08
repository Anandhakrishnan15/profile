import { createContext, useContext, useState } from "react";

// we are going to use context API
export const TokenGEN =createContext();

export const TokenProvider = ({children}) =>{
    const [token ,setToken] = useState(localStorage.getItem("Token"))
    const TokenStoreLS =(serverToken) =>{
        return localStorage.setItem("Token",serverToken);
    }
    let isLogedIn = !!token;
    // console.log("logedin", isLogedIn);
    const userLogOut = ()=>{
        setToken("");
        return localStorage.removeItem("Token")
    }
    return <TokenGEN.Provider value={{isLogedIn,TokenStoreLS,userLogOut}}>
    {children}
    </TokenGEN.Provider>
}
// make acoustome hook
export const useToken=()=>{
    const token = useContext(TokenGEN);
    if(!token){
        throw new Error("some error in the mainjs page chek  it out")
    }
    return token
}