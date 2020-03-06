import { SET_MONSTER } from "../actions/types";

const initialState = {
    health: 25,
    armor: 10,
    totalHealth: 25,
    totalArmor: 10,
    alive: true,
    monster: {
        character: "enemy",
        type: "one"
    }
};

export default function monsterReducer(state = initialState, action) {
    let monster = {}
    switch (action.battleNumber) {
        case (0):
            monster = {
                character: "enemy",
                type: "one"
            };
            break;
        case (1):
            monster = {
                character: "enemy",
                type: "two"
            };
            break;
        case (2):
            monster = {
                character: "enemy",
                type: "three"
            };
            break;
        case (3):
            monster = {
                character: "boss",
                type: "one"
            };
            break;
        case (4):
            monster = {
                character: "boss",
                type: "two"
            };
            break;
        case (5):
            monster = {
                character: "boss",
                type: "three"
            };
            break;
        default:
            monster = {
                character: "enemy",
                type: "one"
            };
            break;
    }
    switch (action.type) {
        case SET_MONSTER:
            return {
                ...state,
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive,
                totalArmor: action.payload.totalArmor,
                totalHealth: action.payload.totalHealth,
                monster
            };
        default:
            return state;
    }
}