import React, { useState, useEffect } from "react"
import Spritesheet from 'react-responsive-spritesheet';
import sprites from "./sprites.json"


function Sprite(props) {
    const [data, setData] = useState({
        name: 'React',
        type: 'idle',
    })

    useEffect(() => {

    }, [data.type])
    // const myFunctionPlay = () => {
    //     this.spritesheeInstance.play();
    // }

    // const myFunctionPause= () => {
    //     this.spritesheeInstance.pause();
    // }

    // const myFunctionGetFrame= () => {
    //     alert(this.spritesheeInstance.getInfo('frame'));
    // }

    const allTypes = (p = props.charcter) => {
        console.log(p)
        const types = []
        for (const action in p) {
            console.log(action)
            types.push(
                <button value={action} onClick={() => { setData({ ...data, type: { action }.action }) }}>{action}</button>
            )
        };
        return types
    }

    const action = (p = props.charcter, type = data.type) => {
        console.log(type)
        return p[type]
    }

    const makeSprite = () => {

        console.log("Steps = ", action().frames)
        return <Spritesheet
            className={`sprite`}
            image={action().image}
            widthFrame={action().widthFrame}
            heightFrame={action().heightFrame}
            steps={action().frames}
            fps={12}
            // startAt={0}
            // endAt={action.frames}
            autoplay={true}
            loop={true}
        // getInstance={spritesheet => {
        //     this.spritesheeInstance = spritesheet;
        // }}
        />
    }


    return (
        <div className="rrs-container">
            <div >
                {makeSprite()}
            </div>
            <div>
                {/* <button onClick={myFunctionPlay.bind(this)}>play</button>
                    <button onClick={myFunctionPause.bind(this)}>pause</button>
                    <button onClick={myFunctionGetFrame.bind(this)}>alert current frame</button> */}
                {allTypes()}
            </div>
        </div>
    );
}


export default Sprite