import { useEffect } from "react"
import { Navigate } from "react-router-dom";
import { useToken } from "../Storage/LSToken";
const LogOut = ()=>{
    const  {userLogOut} = useToken()
    useEffect(()=>{
        userLogOut();
    },[userLogOut])

    return <Navigate to="/login"/>
}

export default LogOut
//get the itemes to useState hook of token