import { combineReducers } from "redux";
import allMonstersReducer from "./allMonstersReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import monsterReducer from "./monsterReducer";
import monsterAnimationReducer from "./monsterAnimationReducer";
import monsterSpriteReducer from "./monsterSpriteReducer";
import playerReducer from "./playerReducer";
import playerAnimationReducer from "./playerAnimationReducer";
import playerSpriteReducer from "./playerSpriteReducer";
import statsReducer from "./statsReducer";

export default combineReducers({
    monsters: allMonstersReducer,
    auth: authReducer,
    errors: errorReducer,
    monster: monsterReducer,
    monsterAnimation: monsterAnimationReducer,
    monsterSprite: monsterSpriteReducer,
    player: playerReducer,
    playerAnimation: playerAnimationReducer,
    playerSprite: playerSpriteReducer,
    stats: statsReducer
});