import { SET_CARDS } from "../actions/types";

const initialState = {
    playerCards: ["r1", "r2", "r3", "r4", "r5", "p1", "p2", "p3", "p4", "p5", "s1", "s2", "s3", "s4", "s5"],
};

export default function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CARDS:
            return action.cards;
        default:
            return state;
    }
}