import { SET_MONSTER_ANIMATION } from "../actions/types";

const initialState = "idle";


export default function monsterAnimationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MONSTER_ANIMATION:
            return action.payload.animation;
        default:
            return state;
    }
}