import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';

class Enemy extends Component {
    //state
    constructor(props) {
        super(props);
        this.state = {
            animation: props.animation,
            nextAnimation: 'idle'
        };
    }

    //dispatch (nextAnimation)
    changeAnimation(x) {
        this.setState({ ...this.state, nextAnimation: x })
    }

    action(p = this.props.character, type = this.state.animation) {
        return p[type]
    }

    render() {
        return <Spritesheet
            className={this.props.className}
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
            //call dispatch (nextAnimation)
            onClick={() => { this.changeAnimation("attack") }}
            onLoopComplete={() => {
                // dispatch (animation and nextAnimation)
                if (this.state.nextAnimation) {
                    this.setState({ animation: this.state.nextAnimation, nextAnimation: '' })
                }
                //calling dispatch (nextAnimation)
                if (this.action().oneLoop) {
                    this.changeAnimation("idle")
                }
            }}
        />
    }
}

export default Enemy