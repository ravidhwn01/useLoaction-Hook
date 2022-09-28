import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const {fname, lname} = useParams();
  return (
    <>
           <h2> my name is {fname} {lname} and user page! </h2> 

    </>
  )
}
