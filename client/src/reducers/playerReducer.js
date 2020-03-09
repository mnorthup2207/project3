import { SET_PLAYER_HEALTH_ARMOR, 
    SET_BATTLE_NUMBER,
    RESET_BATTLE_NUMBER,
    SET_CARDS,
    SET_PLAYER,
    UPDATE_PLAYER_HEALTH,
    UPDATE_PLAYER_ARMOR,
} from "../actions/types";

const initialState = {
    alive: true,
    battleNumber: 0,
    armor: 50,
    totalArmor: 50,
    health: 50,
    totalHealth: 50,
    cards: ["r1", "r2", "r3", "r4", "r5", "p1", "p2", "p3", "p4", "p5", "s1", "s2", "s3", "s4", "s5"],
};

export default function playerReducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case SET_PLAYER: 
            return {
                alive: action.payload.alive,
                battleNumber: action.payload.battleNumber,
                armor: action.payload.armor,
                totalArmor: action.payload.totalArmor,
                health: action.payload.health,
                totalHealth: action.payload.totalHealth,
                cards: action.payload.cards
            }
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload.cards
            };
        case SET_PLAYER_HEALTH_ARMOR:
            return {
                ...state,
                health: action.payload.health,
                armor: action.payload.armor,
                alive: action.payload.alive
            };
        case UPDATE_PLAYER_HEALTH:
            return{
                ...state,
                totalHealth: state.totalHealth + action.payload.value
            };
        case UPDATE_PLAYER_ARMOR:
            return{
                ...state,
                totalArmor: state.totalArmor + action.payload.value
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
