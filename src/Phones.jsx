import React from 'react'
import phone1Img from "../src/assets/phone1.svg";
import phone2Img from "../src/assets/phone2.svg";
import playImg from "../src/assets/play.svg";
import minImg from "../src/assets/min.svg";
import reelsImg from "../src/assets/reels.svg";
import './css/Phones.css'

export default function Phones() {
  return (
    <div>
        <img className='phone1' src={phone1Img} alt="phone1Img"/>
        <img className='phone2' src={phone2Img} alt="phone2Img"/>
        <img className='minImg' src={minImg} alt="minImg"/>
        <img className='reelsImg' src={reelsImg} alt="reelsImg"/>
        <img className='playImg' src={playImg} alt="playImg"/>
    </div>
  )
}
