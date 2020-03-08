import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sprite from '../../sprites/getSprite.js'
import "./style.css"


const CreatorCard = (props) => {
    console.log(props);
    const { name, GitHub, FavoriteSpell, handle, character, type } = props
    return (
        <Grid container id="creatorContainer" spacing={3}>
            <Grid item xs>
                <h4>{name}</h4>
                <h4><a href={GitHub} target="_blank">GitHub Account: {handle}</a></h4>
                <h4>Favorite Spell: {FavoriteSpell}</h4>
            </Grid>
            <Grid item xs>
                <div id='boom2'>
                    <Sprite
                        character={character}
                        type={type}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default CreatorCard;
