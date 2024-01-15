import React, { useState } from "react";
import "./contact.css";
import { useToken } from "../../Storage/LSToken";

const defaultContactForm = {
  username: "",
  email: "",
  request: "",
};
const Contactform = () => {
  const [msg, setMsg] = useState(defaultContactForm);
  const [useData, setUseData] = useState(true);
  const { user } = useToken();
  if (useData && user) {
    setMsg({
      username: user.username,
      email: user.email,
      request: "",
    });
    setUseData(false);
  }

  const messagesubmit = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setMsg({
      ...msg,
      [name]: value,
    });
  };

  // submit function
  const msgSubmited =async (e) => {
    e.preventDefault();
    try {
      const connectContactform = await fetch("http://localhost:3331/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(msg)
      })
      if(connectContactform.ok){
        const contactmsg = await connectContactform.json()
        console.log(contactmsg);
        setMsg(defaultContactForm)
        alert('msg sent successfull')
      }
   
      
    } catch (error) {
      console.log("some errors found" ,error)
      alert('msg not send')
    }

    // console.log(msg);
  };
  return (
    <div>
      <div className="contactusfromContainer">
        <div className="contcatFormHeader ">
          <h1>contact Us</h1>
        </div>
        <div className="contactform">
          <form onSubmit={msgSubmited}>
            <div className="contactinput">
              <label>username</label>
              <input
                type="text"
                placeholder="enter your username"
                required
                name="username"
                id=" message"
                autoComplete="off"
                value={msg.username}
                onChange={messagesubmit}
              />
            </div>
            <div className="contactinput">
              <label>email</label>
              <input
                type="text"
                placeholder="enter your email"
                required
                name="email"
                id=" message"
                autoComplete="off"
                value={msg.email}
                onChange={messagesubmit}
              />
            </div>
            <div className="contactinput">
              <label>message</label>
              <textarea
                type="text"
                placeholder="enter your message over here"
                required
                name="request"
                id=" message"
                autoComplete="off"
                value={msg.request}
                onChange={messagesubmit}
              />
            </div>
            <div className="contactUsSubmitButton">
              <button type="submit">send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
