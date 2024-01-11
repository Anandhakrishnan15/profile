import React from 'react'
import { useToken } from '../Storage/LSToken'

const About = () => {

  const {user}= useToken()
  return (
    <div> 
      <h1>HI !! {user.username} </h1>
        <h1>About</h1>
    </div>
  )
}

export default About