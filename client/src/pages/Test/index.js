import React from "react";
import Container from '@material-ui/core/Container';
import Sprite from '../../sprites/getSprite.js'
import './test.css'

// const character = sprites.player.main

// const allTypes = () => {
//     const types = []
//     for (const action in character) {
//         types.push(
//             <button value={action} onClick={console.log(action)}>{action}</button>
//         )
//     };
//     return types
// }

const makeSprite = () => {
    return (
        <Container maxWidth="lg">
            <div>
                <Sprite
                    character="display"
                    type="pirate"
                />
            </div>
            {/* {allTypes()} */}
        </Container>
    );
};


export default makeSprite