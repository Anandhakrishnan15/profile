import React, { useState } from "react";
import "./RegAndLog.css";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../Storage/LSToken";

const SIgnup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const inputHandler = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const navgate = useNavigate();
  const {TokenStoreLS} = useToken()
  const regdubmit = async (e) => {
    e.preventDefault();
    try {
      const connectserver = await fetch(`http://localhost:3331/reg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (connectserver.ok) {
        const res_data = await connectserver.json();
      console.log(res_data);
        TokenStoreLS(res_data.token)
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
      }
    alert("registeration is sucessfull")
      console.log(connectserver);
      navgate("/login");
    } catch (error) {
      alert("some error in registering")
      console.log("erro", error);
    }
  };
  return (
    <>
      <div className="formcontainer">
        <div className="formhead">
          {/* all headings and other things will be over here */}
          <h1> register yourself here</h1>
        </div>

        <div className="formbody">
          <form onSubmit={regdubmit}>
            <div className="inputs">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="enter your username "
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={inputHandler}
              />
            </div>

            <div className="inputs">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                placeholder="enter your email id"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={inputHandler}
              />
            </div>

            <div className="inputs">
              <label htmlFor="phone">phone</label>
              <input
                type="nunber"
                name="phone"
                placeholder="enter your phone number "
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="inputs">
              <label htmlFor="password">password</label>
              <input
                type="Password"
                name="password"
                placeholder="enter your password "
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={inputHandler}
              />
            </div>

            <div className="submitButeon">
              <button type="submit" id=" reg-submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SIgnup;
