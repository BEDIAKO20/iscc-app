import React from 'react'
import "../WhoWeAre/whoweare.css"
import groupImage from "../../assets/groupImage.png"

function Whoweare() {
  return (
    <>
<div className=''>
<div className="AboutPagText-Box">
<div className="About-text ">
  <h1 className='About-text'>About <span className='us-Text'>Us</span></h1>
</div>
</div>
<div className='image-Box'>
  <img src={groupImage} className='groupImage'/>
</div>
</div>

    </>
  )
}

export default Whoweare