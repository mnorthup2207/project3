import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';

class Enemy extends Component {
    constructor() {
        super();
        this.state = {
            type: 'idle',
            nextAction: ''
        };
    }

    changeAnimation(action, p = this.props.character) {
        this.setState({ ...this.state, nextAction: action })
    }

    action(p = this.props.character, type = this.state.type) {
        return p[type]
    }

    render() {
        return <div className='sprite-enemy'>
            <Spritesheet
                image={this.action().image}
                widthFrame={this.action().widthFrame}
                heightFrame={this.action().heightFrame}
                steps={this.action().frames}
                fps={10}
                autoplay={true}
                loop={true}
                getInstance={spritesheet => {
                    this.spritesheeInstance = spritesheet;
                }}
                onInit={() => {
                    this.spritesheeInstance.setEndAt(this.action().frames)
                }}
                onClick={() => { this.changeAnimation("attack") }}
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
    }
}

export default Enemy