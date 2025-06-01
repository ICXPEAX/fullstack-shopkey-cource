import React from "react";
import bg from "../src/assets/bg.mp4"
import './Videobg.css'
import { observer } from "mobx-react-lite";

const Videobg = observer(() => {


  const isVideo = false
  
  
  
  
  
  return (
    <>
    {isVideo == true ? (  <div className="video_wrap">
      <video src={bg} autoPlay muted loop/>
  </div>)
: (
  <div className="video_wrap1">

</div>
  )
}
</>
  
  )
})

export default Videobg
