import { SET_PLAYER_ANIMATION } from "../actions/types";

const initialState = "idle";


export default function playerAnimationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER_ANIMATION:
            return action.payload.animation;
        default:
            return state;
    }
}