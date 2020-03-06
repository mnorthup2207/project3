import { SET_MONSTER_SPRITE } from "../actions/types";

const initialState = {
    character: "enemy",
    type: "one"
};


export default function monsterSpriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MONSTER_SPRITE:
            return {
                character: action.payload.character,
                type: action.payload.type
            };
        default:
            return state;
    }
}