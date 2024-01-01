import React, { useState } from 'react'
import "./RegAndLog.css";
const Login = () => {
const [user,setUser] = useState({
    email:"",
    password:""
})

const loginHandler = (e)=>{
    console.log(e)
    let name = e.target.name
    let value =e.target.value

  setUser({
    ...user,
    [name]:value,
  })
}

const loginSubmt = (e)=>{
    e.preventDefault()
    console.log(user)
}


  return (
    <div>
        <div className="loginformcontainer">
            <div className="loginform">
                <div className="loginformheading">
                    <h1>Login over here</h1>
                </div>
                <form onSubmit={loginSubmt}>
                    <div className='logininput'>
                    <label htmlFor="email">email</label>
                    <input type="text"
                        name='email'
                        placeholder='enter your email id'
                        autoComplete='off'
                        required
                        id='email'
                        value={user.email}
                        onChange={loginHandler}/>
                    </div>

                    <div className='logininput'>
                    <label htmlFor="password">password</label>
                    <input type="text"
                        name='password'
                        placeholder='enter your password'
                        autoComplete='off'
                        required
                        id='password'
                        value={user.password}
                        onChange={loginHandler}
                        />
                    </div>
                    <div className="loginbutton">
                        <button type='submit'>login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login