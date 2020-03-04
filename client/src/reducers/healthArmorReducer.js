import { SET_CHARACTER_ARMOR, SET_CHARACTER_HEALTH } from "../actions/types";

const initialState = {
    health: 50,
    currentHealth: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}