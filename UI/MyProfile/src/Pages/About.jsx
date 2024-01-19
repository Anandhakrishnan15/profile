import React from 'react'
import { useToken } from '../Storage/LSToken'
import { NavLink, Outlet,useNavigate} from 'react-router-dom'
import Employess from './Employess'

const About = () => {
  const navigate = useNavigate()
  const {user}= useToken()
  return (
    <div> 
      <h1>HI !! {user.username} </h1>
        <h1>About</h1>
        <NavLink to ="emp"><button>employess data </button></NavLink>
        <Outlet/>
        <button onClick={()=>navigate("/emp")}>employess data </button>

    </div>
  )
}

export default About