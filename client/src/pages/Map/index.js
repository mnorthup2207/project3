import React, {useEffect} from "react";
import { Link } from "react-router-dom";

////Sprites////
import Sprite from "../../sprites/getSprite";
import { useSelector, useDispatch } from "react-redux";

import { setMonster, setMonsterAnimation, setMonsterSprite } from "../../actions/gameActions";

////Material UI////
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import mapPic from "../../images/map-color.png";
import mapPic1 from "../../images/map-color-ratio.png";
import "./style.css"

const storyLine = [
        "Nicknamed the one-man Army. Rumor is after one battle thought to be a suicide mission for his Heard, your Opponent walked away from the only survivor from either side. Make no mistake, even though this is your first battle this opponent will not go easy on you.",
        "An unremorseful warmonger. This anarchist is always the one to start the fire that burns the defeated village. His only mission in life is wandering far and wide looking to start a fight, but more importantly, he always ends them too.",
        "As the story goes this Monster leads his herd into several civilian villages, murdered and pillaged. Until some of his soldiers talked of mutiny for the unjust murders. The entirety of the army had a tragic accident in a rockslide, All except your next opponent.",
        "Wants nothing more than to Burn. He leaves a trail of Scorched Earth and Burning corpses on the way to his next atrocity.",
        "Wants nothing more than to Burn. He leaves a trail of Scorched Earth and Burning corpses on the way to his next atrocity.",
        "Plans to turn the land into a frozen tundra. He walks from town to town freezing watering holes to the core and causes livestock to die from Hypothermia. You must stop him before his actions cause a mass Famine.",
];

const MapPage = (props) => {
    const monsters = useSelector(state => state.monsters[0]);
    const { character, type } = useSelector(state => state.monsterSprite);
    const battleNumber = useSelector(state => state.player.battleNumber);
    const dispatch = useDispatch();
    console.log(battleNumber);
    const story = storyLine[battleNumber]
    useEffect(() => {
        console.log(monsters)
        let newMonster = monsters.filter(monster => monster.order === battleNumber)[0]
        console.log(newMonster);
        dispatch(setMonster(newMonster));
        dispatch(setMonsterSprite(newMonster.animation.character, newMonster.animation.type))
    }, [battleNumber])
    
    return (
        <>
            <img id="mapPic" src={mapPic1} alt="map" />
            <div className="helpfulDiv"></div>
            <Container id="fightContainer" maxWidth="lg">
                <Grid container spacing={3} >
                    <Grid item xs>
                        <Link to="/home">
                            <Button
                                color="primary"
                                size="large"
                            >
                                <h1>Home</h1>
                                <i className="material-icons" style={{ marginLeft: 10 }}>house</i>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container
                    id="shift2"
                    justify="flex-start"
                    alignItems="center"
                    >
                    <Grid item xs={6}>
                        <div id="spriteDiv">
                            <Sprite character={character} type={type} />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={"/fight"}>
                            <h3>{story}</h3>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MapPage;