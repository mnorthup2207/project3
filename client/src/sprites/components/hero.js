import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: props.animation,
            nextAnimation: 'idle'
        };
    }

    changeAnimation(action) {
        this.setState({ ...this.state, nextAnimation: action })
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
            steps={50}
            fps={10}
            autoplay={true}
            loop={this.action().death ? false : true}
            getInstance={spritesheet => {
                this.spritesheeInstance = spritesheet;
            }}
            onInit={() => {
                this.spritesheeInstance.setEndAt(this.action().frames)
            }}
            onClick={() => { this.changeAnimation("hurt") }}
            onLoopComplete={() => {
                if (this.action().death) {
                    // break
                }
                if (this.state.nextAnimation) {
                    this.setState({ animation: this.state.nextAnimation, nextAnimation: '' })
                }
                if (this.action().oneLoop) {
                    this.changeAnimation("idle")
                }
            }}
        />
    }
}

export default Hero