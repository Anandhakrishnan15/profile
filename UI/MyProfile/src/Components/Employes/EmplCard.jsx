import React from "react";
import "./Employescard.css";
import { useToken } from "../../Storage/LSToken";
const EmplCard = () => {
  const { empfetch } = useToken();
  return (
    <div className="employessCardContainer">
      {empfetch.map((empFetch, empIndex) => (
        // const { name, job_title, salary_received, phone_number,} = empFetch;
    
          <div className="employeCard" key={empIndex}>
            <div className="employDitails">Name:{empFetch.name} </div>
            <div className="employDitails">Job :{empFetch.job_title} </div>
            <div className="employDitails">
              Phone humber :{empFetch.phone_number}
            </div>
            <div className="EmpAddress">
              <div className="employDitails">address:</div>
              <div className="employDitails">
                <p>{empFetch.address.city}</p>
                <p>{empFetch.address.street}</p>
                <p>{empFetch.address.state}</p>
                <p>{empFetch.address.zipcode}</p>
              </div>
            </div>

            <div className="employDitails">
              Salary :{empFetch.salary_received}{" "}
            </div>
          </div>
      
      ))}
    </div>
  );
};

export default EmplCard;
