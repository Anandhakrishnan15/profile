import React, { useState } from "react";
import "./contact.css";
const Contactform = () => {
    const [msg ,setMsg] = useState({
        username:"",
        email:"",
        request:""
    })

    const messagesubmit =(e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setMsg({
            ...msg,
            [name]:value
        })
    }
    const msgSubmited=(e)=>{
        e.preventDefault();
        console.log(msg);
    }
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
                <input type="text"
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
                <input type="text"
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
                <input type="text"
                placeholder="enter your message over here"
                required
                name="request"
                id=" message"
                autoComplete="off"
                value ={msg.request}
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
