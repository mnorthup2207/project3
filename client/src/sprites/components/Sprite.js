import React, {useState} from "react"
import Spritesheet from 'react-responsive-spritesheet';
import sprites from "../sprites.json"


const Sprite = ({props}) => {

  return <Spritesheet
    image={props.image}
    widthFrame={props.widthFrame}
    heightFrame={props.heightFrame}
    steps={props.frames}
    fps={12}
    autoplay={true}
    loop={true}
  />
}

export default Sprite