import React from "react";
import Container from '@material-ui/core/Container';
import Sprite from '../../sprites/getSprite.js'
import sprites from '../../sprites/sprites.json'
import './test.css'

const character = sprites.paper.one

const allTypes = () => {
    const types = []
    for (const action in character) {
        types.push(
            <button value={action} onClick={console.log(action)}>{action}</button>
        )
    };
    return types
}

const makeSprite = () => {
    return (
        <Container maxWidth="lg">
            <div>
                <Sprite
                    character={character}
                />
            </div>
            {/* {allTypes()} */}
        </Container>
    );
};


export default makeSprite