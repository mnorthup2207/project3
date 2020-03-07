import { SET_ALL_MONSTERS } from "../actions/types";

const initialState = [{}];


export default function monsterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_MONSTERS:
            return [action.monsters];
        default:
            return state;
    }
}