import { combineReducers } from "redux";
import homeReducer from "../home/reducer";
import loginReducer from "../login/reducer";

const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer,
})

export default rootReducer;