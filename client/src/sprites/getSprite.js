import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';

class Sprite extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            type: 'idle'
        };
    }

    myFunctionPlay() {
        this.spritesheeInstance.play();
    }

    myFunctionPause() {
        this.spritesheeInstance.pause();
    }

    changeAnimation(action, p = this.props.charcter) {

        // console.log(p[action])
        this.spritesheeInstance.setStartAt(0)
        this.spritesheeInstance.setEndAt(p[action].frames)
        console.log("State is now", action)

        this.setState({ ...this.state, type: action })


        // this.loopPromise().then(
        //     console.log(p[action]),
        //     this.spritesheeInstance.setStartAt(0),
        //     this.spritesheeInstance.setEndAt(p[action].frames),
        //     console.log("State is now", action),
    
        //     this.setState({ ...this.state, type: action })
        // )
    }

    allTypes(p = this.props.charcter) {
        const types = []
        for (const action in p) {
            types.push(
                <button value={action} onClick={() => this.changeAnimation({ action }.action)}>{action}</button>
            )
        };
        return types
    }

    // loopPromise(action) {
    //     return new Promise((resolve, reject) => {
    //         this.loopDone(action, (err, script) => {
    //             if (err) reject(err)
    //             else resolve(script);
    //         });
    //     })
    // }


    action(p = this.props.charcter, type = this.state.type) {
        return p[type]
    }

    render() {
        return (
            <div className="rrs-container" >
                <div className='sprite'>
                    <Spritesheet
                        image={this.action().image}
                        widthFrame={this.action().widthFrame}
                        heightFrame={this.action().heightFrame}
                        steps={50}
                        fps={12}
                        autoplay={true}
                        loop={true}
                        getInstance={spritesheet => {
                            // this.loopDone = spritesheet.onLoopComplete
                            this.spritesheeInstance = spritesheet;
                        }}
                        onInit={() => {
                            this.spritesheeInstance.setEndAt(this.action().frames)
                        }
                        }
                        // onLoopComplete={spritesheet => {
                        //     this.loopDone = spritesheet
                        // }}
                    />
                </div>
                <div>
                    <button onClick={this.myFunctionPlay.bind(this)}>play</button>
                    <button onClick={this.myFunctionPause.bind(this)}>pause</button>
                    {this.allTypes()}
                </div>
            </div>
        );
    }
}

export default Sprite