import React from "react";
import Container from '@material-ui/core/Container';
import Sprite from '../../sprites/getSprite'
import sprites from '../../sprites/sprites.json'
import './test.css'

const makeSprite = () => {
    return (
        <Container maxWidth="lg">
            <div>
                <Sprite
                    charcter={sprites.scissor.three}
                />
            </div>
        </Container>
    );
};


export default makeSprite