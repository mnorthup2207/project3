import { SET_ALL_MONSTERS } from "../actions/types";

const initialState = [{
    damage: [5, 15],
    sequence: ["attack"],
    name: "minotaur_yellow",
    health: 35,
    armor: 10,
    totalHealth: 25,
    totalArmor: 10,
    attacking: false,
    defending: false,
    idle: true,
    alive: true,
    round: 1,
    order: 0
}];


export default function monsterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_MONSTERS:
            return [action.monsters];
        default:
            return state;
    }
}