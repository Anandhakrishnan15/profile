import React from 'react'
import { NavLink } from 'react-router-dom'
import  "./erroe.css"

function Erroe404() {
  return (
    <div>
        
        <section className="errPageContainer">
            <div className='erroePgae'>
            <div className="erroheading">
                <h1>404</h1>
                <p> sorry! page not found</p>
            </div>
            <div className="errorbody">
               oops!! it seems like the page your tring to access desn't exist.
               if you feel there is any issue fell free to report to us, we will look into it.

            </div>
          
            <div className="errorbuts">
                <NavLink  to="/"> <button id='retHome'>Return to Home</button></NavLink>
                <NavLink  to="/contact"> <button id='reprtbut'>feedback</button></NavLink>

            </div>
            </div>
        </section>
    </div>
  )
}

export default Erroe404