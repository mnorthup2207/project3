import React from "react";

////Material UI////
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

////Sprite////
import Sprite from "../../sprites/getSprite";



// Each Card will have a different type = Rock, Paper or Scissors
//    Example sprite =>  <Sprite character = "scissor" type = "one" />


export default function PlayerHand() {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary">
                    Card Type
                </Typography>
            </CardContent>
        </Card>
    );
};