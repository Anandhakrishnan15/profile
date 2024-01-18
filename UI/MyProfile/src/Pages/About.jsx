import React from 'react'
import { useToken } from '../Storage/LSToken'
import { NavLink, Outlet} from 'react-router-dom'

const About = () => {

  const {user}= useToken()
  return (
    <div> 
      <h1>HI !! {user.username} </h1>
        <h1>About</h1>
        <NavLink to ="emp"><button>employess data </button></NavLink>
        <Outlet/>

    </div>
  )
}

export default About