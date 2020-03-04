import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';

class Sprite extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            type: 'idle',
            nextAction: ''
        };
    }

    // myFunctionPlay() {
    //     this.spritesheeInstance.play();
    // }

    // myFunctionPause() {
    //     this.spritesheeInstance.pause();
    // }

    changeAnimation(action, p = this.props.character) {

        this.setState({ ...this.state, nextAction: action })

        // console.log(p[action])
        // this.spritesheeInstance.goToAndPlay(0)
        // this.spritesheeInstance.setEndAt(p[action].frames)
        // console.log("State is now", action)

        // this.setState({ ...this.state, type: action })


        // this.loopPromise().then(
        //     console.log(p[action]),
        //     this.spritesheeInstance.goToAndPlay(0),
        //     this.spritesheeInstance.setEndAt(p[action].frames),
        //     console.log("State is now", action),

        //     this.setState({ ...this.state, type: action })
        // )
    }

    allTypes(p = this.props.character) {
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


    action(p = this.props.character, type = this.state.type) {
        return p[type]
    }

    render() {
        return <div className='sprite'>
            <Spritesheet
                // key={this.state.type}
                image={this.action().image}
                widthFrame={this.action().widthFrame}
                heightFrame={this.action().heightFrame}
                steps={50}
                fps={10}
                autoplay={true}
                loop={true}
                getInstance={spritesheet => {
                    this.spritesheeInstance = spritesheet;
                    // this.loopDone = this.spritesheeInstance.onLoopComplete
                }}
                onInit={() => {
                    this.spritesheeInstance.setEndAt(this.action().frames)
                }}
                onClick={() => { this.changeAnimation("jump") }}
                // onEnterFrame={[
                //     {
                //         frame: this.action().frames - 1,
                //         callback: (() => {
                //             // if (this.action().oneLoop) {
                //             //     console.log("yay")
                //             //     this.changeAnimation("idle")
                //             // }
                //             if (this.state.nextAction) {
                //                 console.log("changing to", this.state.nextAction)
                //                 this.setState({ type: this.state.nextAction, nextAction: '' })
                //             }
                //             if (this.action().oneLoop) {
                //                 console.log("yay")
                //                 this.changeAnimation("idle")
                //             }
                //         })
                //     }
                // ]}

                onLoopComplete={() => {
                    if (this.state.nextAction) {
                        console.log("changing to", this.state.nextAction)
                        this.setState({ type: this.state.nextAction, nextAction: '' })
                    }
                    if (this.action().oneLoop) {
                        console.log("yay")
                        this.changeAnimation("idle")
                    }
                }}
            />
        </div>
        // <div>
        {/* <button onClick={this.myFunctionPlay.bind(this)}>play</button>
                    <button onClick={this.myFunctionPause.bind(this)}>pause</button> */}
        {/* {this.allTypes()}
            </div> */}
    }
}

export default Sprite