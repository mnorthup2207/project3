import React from "react";

////Material UI////
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Discard({player}) {
    return (
        <>
            {player.Choop.discardDeck.map(card => {
                return (
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary">
                                {card}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    );
};