import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx'
import axios from 'axios'   
import EventDetails from './components/eventDetails/eventDetails.jsx'
import React, { useEffect, useState } from "react";

const App = () => {
  const [remainingEvents,setRemainingEvents] = useState([])
  const [passedEvents,setPassedEvents] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get("http://127.0.0.1:1313/api/eventInfo/eventsRemaining").then(res=>{
      setRemainingEvents(res.data)
      axios.get(`http://127.0.0.1:1313/api/eventInfo/spec-event?place=${(res.data.events[0].RoundNumber) - 1}`).then(fres=>{
        setPassedEvents(fres.data)
      })
    })
  },[])
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home remainingEvents={remainingEvents} loading={loading} passedEvents={passedEvents}/>}/>
          <Route
            path="/racing/details/:location"
            element={<EventDetails remainingEvents={remainingEvents} passedEvents={passedEvents}/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App