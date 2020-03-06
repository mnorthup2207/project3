import React from "react";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
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
        <Container id="testContainer" maxWidth="lg">
            <Grid container item justify="space-evenly" alignItems="center" xs={12}>
                <Grid item xs={4}>
                    <div id='boom'>
                        <Sprite
                            character="boss"
                            type="two"
                        />
                    </div>
                </Grid>
                {/* <Grid item xs={4}>
                    <div id='boom'>
                        <Sprite
                            character="player"
                            type="pirate"
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div id='boom'>
                        <Sprite
                            character="player"
                            type="king"
                        />
                    </div>
                </Grid> */}
            </Grid>
        </Container>
        // <Sprite
        //     character="enemy"
        //     type="three"
        // />
    );
};


export default makeSprite