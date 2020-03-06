import { SET_PLAYER_SPRITE } from "../actions/types";

const initialState = {
    character: "player",
    type: "main"
};


export default function playerSpriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER_SPRITE:
            return {
                character: action.payload.character,
                type: action.payload.type
            };
        default:
            return state;
    }
}