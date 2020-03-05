import { SET_CHARACTER_HEALTH_ARMOR, SET_CHARACTER_TOTAL_HEALTH, SET_CHARACTER_TOTAL_ARMOR } from "../actions/types";

const initialState = {
    health: 50,
    totalHealth: 50,
    armor: 50,
    totalArmor: 50
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.health,
                armor: action.armor
            };
        case SET_CHARACTER_TOTAL_ARMOR:
            return {
                ...state,
                totalArmor: action.value
            };
        case SET_CHARACTER_TOTAL_HEALTH:
            return {
                ...state,
                totalHealth: action.value
            };
        default:
            return state;
    }
}