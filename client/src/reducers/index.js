import { combineReducers } from "redux";
import authReducer from "./authReducer";
import battleNumberReducer from "./battleNumberReducer";
import cardsReducer from "./cardsReducer";
import errorReducer from "./errorReducer";
import monsterReducer from "./monsterReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
    auth: authReducer,
    battleNumber: battleNumberReducer,
    cards: cardsReducer,
    errors: errorReducer,
    monster: monsterReducer,
    player: playerReducer
});