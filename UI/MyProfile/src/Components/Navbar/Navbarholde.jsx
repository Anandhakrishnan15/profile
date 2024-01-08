import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./navbarStyle.css"
import { useToken } from "../../Storage/LSToken";
const Navbarholde = () => {
  const {isLogedIn} = useToken()
  return (
    <>
    <header>
        <div className="navbarcontainer">
            <div className="logoholder">
              <Link><img src="" alt="logo " /></Link>
            </div>
            <div className="listholder">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                   {isLogedIn ? (  <NavLink to="/logout"><li>Logout</li></NavLink>):(
                    <>
                      <NavLink to="/register"><li>Register</li></NavLink>
                    <NavLink to="/login"><li>Login</li></NavLink>
                    </>
                   )}
                  
                  
                </ul>
            </div>

        </div>
    </header>
    </>
  )
};

export default Navbarholde;
