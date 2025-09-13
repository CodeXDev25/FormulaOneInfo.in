import axios from "axios"

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

