import { 
    RESET_STATS_ROUND,
    SET_STATS_PLAYER_DAMAGE,
    SET_STATS_MONSTER_DAMAGE,
    SET_STATS_TOTAL_DAMAGE,
    SET_STATS_ROUND
} from "../actions/types";

const initialState = {
    monsterTotalDamage: 0,
    monsterTurnDamage: 0,
    playerTotalDamage: 0,
    playerTurnDamage: 0,
    round: 1,
    totalRounds: 1
};


export default function playerSpriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATS_PLAYER_DAMAGE:
            return {
                ...state,
                playerTurnDamage: action.payload.damage
            };
        case SET_STATS_MONSTER_DAMAGE:
            return {
                ...state,
                monsterTurnDamage: action.payload.damage
            };
        case SET_STATS_TOTAL_DAMAGE:
            return {
                ...state,
                playerTurnDamage: state.playerTurnDamage + action.payload.pdamage,
                monsterTurnDamage: state.monsterTurnDamage + action.payload.mdamage
            };
        case SET_STATS_ROUND:
            return {
                ...state,
                round: state.round + 1,
                totalRounds: state.totalRounds + 1
            };
        case RESET_STATS_ROUND:
            return {
                ...state,
                round: 0
            }
        default:
            return state;
    }
}