import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import playerStatReducer from "./healthArmorReducer";
import monstersReducer from "./monstersReducer"

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    player: playerStatReducer,
    monsters: monstersReducer,
});