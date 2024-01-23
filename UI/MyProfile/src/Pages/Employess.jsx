import React from 'react'
import EmplCard from '../Components/Employes/EmplCard'
import { useNavigate } from 'react-router-dom'
const Employess = () => {
  const navigate = useNavigate()
  return (
    <div>
    <h1> employess data</h1>
    <button onClick={()=>navigate("/about")}>back to About page  </button>
    <EmplCard />

    </div>

  )
}

export default Employess