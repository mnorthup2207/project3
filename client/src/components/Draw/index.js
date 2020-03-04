import React from "react";
import { Button } from "@material-ui/core";

export default function Draw() {
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{paddingLeft: 25}}    
            >
                <h1>DRAW!</h1>
            </Button>
        </>
    );
};