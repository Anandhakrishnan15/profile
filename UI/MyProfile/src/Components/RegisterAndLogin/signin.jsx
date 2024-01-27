import React, { useState } from "react";
import "./RegAndLog.css";
import { Navigate, useNavigate } from "react-router-dom";
import {useToken} from "../../Storage/LSToken";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const navgate = useNavigate();
  const {TokenStoreLS} = useToken()
  const loginSubmt = async (e) => {
    e.preventDefault();
    try {
      const loginConnect= await fetch(`http://localhost:3331/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
      });
      const res_data= await loginConnect.json();
      console.log(res_data.message);
      if (loginConnect.ok) {
       
        TokenStoreLS(res_data.token)
        setUser({
          email: "",
          password: "",
        });
          toast.success("Login is successful");
        navgate("/"); // Navigate to the home page after the page is reloade
        // refreshPage(); // Refresh the 
        
       
      }else{
       toast.error(res_data.message)
      }
    
    } catch (error) {
      alert("some error in Login")
      console.log("erro", error);
    }
  };

  return (
    <div>
      <div className="loginformcontainer">
        <div className="loginform">
          <div className="loginformheading">
            <h1>Login over here</h1>
          </div>
          <form onSubmit={loginSubmt}>
            <div className="logininput">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                placeholder="enter your email id"
                autoComplete="off"
                required
                id="email"
                value={user.email}
                onChange={loginHandler}
              />
            </div>

            <div className="logininput">
              <label htmlFor="password">password</label>
              <input
                type="text"
                name="password"
                placeholder="enter your password"
                autoComplete="off"
                required
                id="password"
                value={user.password}
                onChange={loginHandler}
              />
            </div>
            <div className="loginbutton">
              <button type="submit">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
