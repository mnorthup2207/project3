import { SET_PLAYER_HEALTH_ARMOR, SET_PLAYER_TOTAL_HEALTH, SET_PLAYER_TOTAL_ARMOR } from "../actions/types";

const initialState = {
    health: 50,
    totalHealth: 50,
    armor: 50,
    totalArmor: 50,
    alive: true
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.health,
                armor: action.armor,
                alive: action.alive
            };
        case SET_PLAYER_TOTAL_ARMOR:
            return {
                ...state,
                totalArmor: action.value
            };
        case SET_PLAYER_TOTAL_HEALTH:
            return {
                ...state,
                totalHealth: action.value
            };
        default:
            return state;
    }
}