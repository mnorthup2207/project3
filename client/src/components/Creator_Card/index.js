import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CreatorCard = (props) => {
    const classes = useStyles();
    console.log(props);
    const { name, GitHub, FavoriteSpell, creatorImg } = props
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <h4>{name}</h4>
                        <h4><a href={GitHub} target="_blank">GitHub Account: {GitHub}</a></h4>
                        <h4>Favorite Spell: {FavoriteSpell}</h4>
                    </Grid>
                    <Grid item xs>
                        <img src={creatorImg} alt="Sprite Image" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CreatorCard;
