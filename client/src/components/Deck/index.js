import React from "react";
import Draw from "../Draw/index";
import Discard from "../Discard/index";
import PlayerHand from "../PlayerHand/index";

export default function Deck() {
    return (
        <>
            <PlayerHand />
            <Draw />
            <Discard />
        </>
    );
};
