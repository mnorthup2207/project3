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
    // console.log(action);
    switch (action.type) {
        case SET_PLAYER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive
            };
        case SET_PLAYER_TOTAL_ARMOR:
            return {
                ...state,
                totalArmor: action.payload.value
            };
        case SET_PLAYER_TOTAL_HEALTH:
            return {
                ...state,
                totalHealth: action.payload.value
            };
        case SET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber: action.payload.number
            };
        case RESET_BATTLE_NUMBER:
            return {
                ...state,
                battleNumber: 0
            };
        default:
            return state;
    }
}