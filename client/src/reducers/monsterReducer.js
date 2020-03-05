import { SET_MONSTER_HEALTH_ARMOR } from "../actions/types";

const initialState = {
    health: 50,
    armor: 50,
    alive: true
};

export default function monsterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MONSTER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.health,
                armor: action.armor,
                alive: action.alive
            };
        default:
            return state;
    }
}