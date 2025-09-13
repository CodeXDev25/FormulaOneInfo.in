import axios from "axios"

function fetchnSetSchedule() {
  axios.get('http://127.0.0.1:1313/api/eventInfo/eventsRemaining').then(response =>{

    axios.get(`http://127.0.0.1:1313/api/eventInfo/spec-event?place=${(response.data.events[0].RoundNumber - 1)}`).then(fresponse =>{
      document.getElementById('js-frame-1-roundno').innerHTML = (response.data.events[0].RoundNumber - 1)
      document.getElementById('js-frame-1-location').innerHTML = fresponse.data.event_data.Location

      const frame1SD = fresponse.data.event_data.SessionDetails.Session1Details.DateUTC
      const newframe1SD = new Date(frame1SD)
      document.getElementById('js-frame-1-startdate').innerHTML = newframe1SD.getDate()

      const frame1ED = fresponse.data.event_data.SessionDetails.Session5Details.DateUTC
      const newframe1ED = new Date(frame1ED)
      document.getElementById('js-frame-1-enddate').innerHTML = newframe1ED.getDate()

      const month = monthNames[newframe1ED.getMonth()]
      document.getElementById('js-frame-1-month').innerHTML = month      
    })
    // set roundnumber for frame 2 and 3
    document.getElementById('js-frame-2-roundno').innerHTML = response.data.events[0].RoundNumber
    document.getElementById('js-frame-3-roundno').innerHTML = response.data.events[1].RoundNumber

    // set roundname for frame 2 and 3
    document.getElementById('js-frame-2-location').innerHTML = response.data.events[0].Location
    document.getElementById('js-frame-3-location').innerHTML = response.data.events[1].Location

    // set startdate for frame 2 and 3
    const monthNames = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    const frame2SD = response.data.events[0].Session1DateUtc
    const newframe2SD = new Date(frame2SD)
    document.getElementById('js-frame-2-startdate').innerHTML = newframe2SD.getDate()

    const frame2ED = response.data.events[0].Session5DateUtc
    const newframe2ED = new Date(frame2ED)
    document.getElementById('js-frame-2-enddate').innerHTML = newframe2ED.getDate()

    const month = monthNames[newframe2ED.getMonth()]
    document.getElementById('js-frame-2-month').innerHTML = month

    const frame3SD = response.data.events[1].Session1DateUtc
    const newframe3SD = new Date(frame3SD)
    document.getElementById('js-frame-3-startdate').innerHTML = newframe3SD.getDate()

    const frame3ED = response.data.events[1].Session5DateUtc
    const newframe3ED = new Date(frame3ED)
    document.getElementById('js-frame-3-enddate').innerHTML = newframe3ED.getDate()

    const month3 = monthNames[newframe3ED.getMonth()]
    document.getElementById('js-frame-3-month').innerHTML = month3
  })
}
fetchnSetSchedule()

async function updateEventImage() {
  const res = await axios.get('http://127.0.0.1:1313/api/eventInfo/eventsRemaining')

  let loc2 = res.data.events[0].Location
  let formatted2 = loc2.toLowerCase().replace(/\s+/g,"")
  let imgUrl2 = `https://ik.imagekit.io/formulaoneinfoImgApi/${formatted2}.jpg`

  let loc3 = res.data.events[1].Location
  let formatted3 = loc3.toLowerCase().replace(/\s+/g,"")
  let imgUrl3 = `https://ik.imagekit.io/formulaoneinfoImgApi/${formatted3}.jpg`

  document.getElementById('js-frame-2-image').src = imgUrl2
  document.getElementById('js-frame-3-image').src = imgUrl3

  const fres = axios.get(`http://127.0.0.1:1313/api/eventInfo/spec-event?place=${(res.data.events[0].RoundNumber - 1)}`).then(fres=>{
    let loc1 = fres.data.event_data.Location
    let formatted1 = loc1.toLowerCase().replace(/\s+/g,"")
    let imgUrl1 = `https://ik.imagekit.io/formulaoneinfoImgApi/${formatted1}.jpg`
    document.getElementById('js-frame-1-image').src = imgUrl1
  })
  
}
document.addEventListener("DOMContentLoaded", () => {
    updateEventImage(); // only run after DOM is ready
});

