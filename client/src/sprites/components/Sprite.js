import React from "react"
import Spritesheet from 'react-responsive-spritesheet';

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