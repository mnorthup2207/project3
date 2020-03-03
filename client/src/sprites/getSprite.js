import React, { useState, useEffect } from "react"
import Spritesheet from 'react-responsive-spritesheet';
import sprites from "./sprites.json"


function Sprite() {
    // const [data, setData] = useState({
    //     name: 'React',
    //     type: 'walk',
    // })
    constructer


    myFunctionPlay() {
        this.spritesheeInstance.play();
    }

    myFunctionPause() {
        this.spritesheeInstance.pause();
    }

    myFunctionGetFrame() {
        alert(this.spritesheeInstance.getInfo('frame'));
    }

    allTypes(p = this.props.charcter) {
        console.log(p)
        const types = []
        for (const action in p) {
            console.log(action)
            types.push(
                <button value={action} onClick={() => {this.setState({ ...this.state, type: { action }.action })}}>{action}</button>
            )
        };
        return types
    }

    action(p = this.props.charcter, type = this.state.type) {
        console.log(type)
        return p[type]
    }

    render() {
        return (
            <div className="rrs-container">
                <div >
                    {this.state.type ? (
                        <Spritesheet
                            className={`sprite`}
                            image={this.action().image}
                            widthFrame={this.action().widthFrame}
                            heightFrame={this.action().heightFrame}
                            steps={this.action().frames}
                            fps={12}
                            // startAt={0}
                            // endAt={this.action.frames}
                            autoplay={true}
                            loop={false}
                            getInstance={spritesheet => {
                                this.spritesheeInstance = spritesheet;
                            }}
                        />
                    ) : null}
                </div>
                <div>
                    <button onClick={this.myFunctionPlay.bind(this)}>play</button>
                    <button onClick={this.myFunctionPause.bind(this)}>pause</button>
                    <button onClick={this.myFunctionGetFrame.bind(this)}>alert current frame</button>
                    {this.allTypes()}
                </div>
            </div>
        );
    }
}

export default Sprite