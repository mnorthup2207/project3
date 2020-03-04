import React from "react";
import sprites from './sprites.json'
import Enemy from './components/enemy'
import Ally from './components/ally'
import Hero from './components/hero'
import Robot from './components/robot'

const Sprite = ({ character, type }) => {

    switch (character) {
        case 'enemy':
        case 'boss':
            return <Enemy character={sprites[character][type]}/>
        case 'player':
            return <Hero character={sprites[character][type]}/>
        case 'rock':
        case 'paper':
        case 'scissor':
            return <Ally character={sprites[character][type]}/>
        case 'display':
            return <Robot character={sprites.player[type]} />
        default:
            throw console.error("The Character Called is Not Valid!")
    }
};

export default Sprite