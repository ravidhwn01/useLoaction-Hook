import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function User() {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  console.log(history);
  return (
    <>
      {/* use of useParams hook */}
      <h2>
        
        my name is {fname} {lname}
      </h2>

      {/* use of useLocation hook */}
      <h1> my current loaction is {location.pathname} </h1>
      {location.pathname === `/user/ravi/dhawan` ? (
        <button
          onClick={() => history.goBack() }
        >
          
          got back 
        </button>
      ) : null}
    </>
  );
}
