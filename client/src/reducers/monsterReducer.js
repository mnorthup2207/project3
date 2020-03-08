import { SET_MONSTER, SET_MONSTER_HEALTH_ARMOR } from "../actions/types";

const initialState = {
    name: "yellow_minotaur",
    health: 25,
    armor: 10,
    totalHealth: 25,
    totalArmor: 10,
    damage: [5, 15],
    alive: true,
    sequence: ["attack"],
    order: 0,
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
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive,
                totalArmor: action.payload.totalArmor,
                totalHealth: action.payload.totalHealth,
                monster: action.payload.monster,
                name: action.payload.name,
                damage: action.payload.damage,
                sequence: action.payload.sequence,
                order: action.payload.order            
            };
        case SET_MONSTER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive
            };
        default:
            return state;
    }
}