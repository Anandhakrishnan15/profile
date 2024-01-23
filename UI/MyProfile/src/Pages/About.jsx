import React, { useState } from "react";
import { useToken } from "../Storage/LSToken";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Employess from "./Employess";
import EmplCard from "../Components/Employes/EmplCard";

const About = () => {
  const navigate = useNavigate();
  const { user } = useToken();
  const [emppbutn, setEmpbutn] = useState(true);
  return (
    <div>
      <h1>HI !! {user.username} </h1>
      <h1>About</h1>
      <button type="button" onClick={() => setEmpbutn(!emppbutn)}>
        employess data{" "}
      </button>
      {emppbutn && (
        <div>
          <h1>heloooo emply boox</h1>
          <EmplCard />
        </div>
      )}

      <button onClick={() => navigate("/emp")}>employess data </button>
    </div>
  );
};

export default About;
