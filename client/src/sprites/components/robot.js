import React, { Component } from "react"
import Spritesheet from 'react-responsive-spritesheet';

class Robot extends Component {
    constructor() {
        super();
        this.state = {
            type: 'idle',
            nextAction: ''
        };
    }

    changeAnimation(action) {
        this.setState({ ...this.state, nextAction: action })
    }

    action(p = this.props.character, type = this.state.type) {
        return p[type]
    }

    render() {
        return <div className='sprite-display'>
            <Spritesheet
                image={this.action().image}
                widthFrame={this.action().widthFrame}
                heightFrame={this.action().heightFrame}
                steps={this.action().frames}
                fps={10}
                autoplay={true}
                loop={true}
                onLoopComplete={spritesheet => {
                    if (this.state.nextAction) {
                        console.log("changing to", this.state.nextAction)
                        this.setState({ type: this.state.nextAction, nextAction: '' })
                    }
                    if (this.action().oneLoop) {
                        console.log("yay")
                        this.changeAnimation("idle")
                    }
                    if (spritesheet.getInfo('completeLoopCicles') % 5 === 0) {
                        this.changeAnimation("blink")
                    }
                }}
            />
        </div>
    }
}

export default Robot