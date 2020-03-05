import { SET_MONSTER_HEALTH_ARMOR } from "../actions/types";

const initialState = {
    health: 25,
    armor: 10,
    alive: true,
    monster: 0
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
        case SET_MONSTER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.health,
                armor: action.armor,
                alive: action.alive,
                monster
            };
        default:
            return state;
    }
}