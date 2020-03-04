import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import healthArmorReducer from "./healthArmorReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    healthArmor: healthArmorReducer,
});