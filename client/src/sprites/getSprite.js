import React from "react";
import sprites from './sprites.json'
import Enemy from './components/enemy'
import Ally from './components/ally'
import Hero from './components/hero'
import Robot from './components/robot'
import './sprites.css'



const Sprite = ({ character, type }) => {

    switch (character) {
        case 'enemy':
        case 'boss':
            return <div className='sprite'><Enemy className={character} character={sprites[character][type]}/></div>
        case 'player':
            return <div className='sprite'><Hero className={character} character={sprites[character][type]}/></div>
        case 'rock':
        case 'paper':
        case 'scissor':
            return <div className='sprite'><Ally className={character} character={sprites[character][type]}/></div>
        case 'display':
            return <div className='sprite'><Robot className={character} character={sprites.player[type]} /></div>
        default:
            throw console.error("The Character Called is Not Valid!")
    }
};

export default Sprite