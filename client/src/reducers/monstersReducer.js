import { SET_BATTLE_NUMBER, RESET_BATTLE_NUMBER } from "../actions/types";


export default function monstersReducer(state = 0, action) {
    switch (action.type) {
        case SET_BATTLE_NUMBER:
            return state + 1
        case RESET_BATTLE_NUMBER:
            return 0
        default:
            return state;
    }
}