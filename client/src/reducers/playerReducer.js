import { SET_PLAYER_HEALTH_ARMOR, 
    SET_PLAYER_TOTAL_HEALTH, 
    SET_PLAYER_TOTAL_ARMOR , 
    SET_BATTLE_NUMBER,
    RESET_BATTLE_NUMBER} from "../actions/types";

const initialState = {
    health: 50,
    totalHealth: 50,
    armor: 50,
    totalArmor: 50,
    alive: true,
    battleNumber: 0
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
        case SET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber = state.battleNumber + 1
            };
        case RESET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber = 0
            };
        default:
            return state;
    }
}