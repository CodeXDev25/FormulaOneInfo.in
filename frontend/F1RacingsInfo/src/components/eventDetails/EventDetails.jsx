import React from "react";
import './EventDetails.css'
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const {location} = useParams()
  return(
    <>
      <div className="EventDetails">
        <h1>Event Details for : {location}</h1>
      </div>
    </>
  )  
}

export default EventDetails

