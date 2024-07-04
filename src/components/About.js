import React from "react"


export default function About({image, about}) {
  return (
    <div>
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
    </div>


  )
}