import React from "react";
import { useToken } from "../../Storage/LSToken";
const EmplCard = () => {
  const {empfetch} = useToken();
  return (
    <div>
      {empfetch.map((empFetch, empIndex) =>{
        // const { name, job_title, salary_received, phone_number,} = empFetch;
        return (
          <div key={empIndex}>
            <div>Name:{empFetch.name} </div>
            <div>Job :{empFetch.job_title} </div>
            <div>Phone humber :{empFetch.phone_number}</div>
          
           <div>address:
            <p>{empFetch.address.city}</p>
            <p>{empFetch.address.street}</p>
            <p>{empFetch.address.state}</p>
            <p>{empFetch.address.zipcode}</p>
            
        
           </div>
            <div>Salary :{empFetch.salary_received} </div>
          </div>
        );
      })}

    </div>
  );
};

export default EmplCard;
