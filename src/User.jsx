import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User() {
  const {fname, lname} = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
           <h2> my name is {fname} {lname}  </h2> 
           <h1> my current loaction is {location.pathname} </h1>
           { location.pathname === `/user/ravi/dhawan`? 
           <button onClick={ ()=>{
            alert("you have clicked! 😃")
           }}  > click here</button> :null  }

    </>
  )
}
