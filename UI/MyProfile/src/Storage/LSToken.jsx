import { createContext, useContext } from "react";

// we are going to use context API
export const TokenGEN =createContext();

export const TokenProvider = ({children}) =>{
    const TokenStoreLS =(serverToken) =>{
        return localStorage.setItem("Token",serverToken);
    }
    return <TokenGEN.Provider value={{TokenStoreLS}}>
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