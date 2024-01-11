import React from 'react'
import { useToken } from '../Storage/LSToken'
const Home = () => {
  const {user} = useToken()
  return (
    <div>
        <h1>home Pages</h1>
        <h2>{user ? `hello ${user.username} this is the home page and ${user.email},${user.phone} this is your register email and phone number`:`hello user this is the home page` } </h2>
    </div>
  )
}

export default Home