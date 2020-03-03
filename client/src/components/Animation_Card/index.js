import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const AnimatedCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <h1>Little Animation of Character here</h1>
            </CardContent>
        </Card>
    );
}
export default AnimatedCard;
