import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import userDataReducer from "./userDataReducer";
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    userReducer: userReducer,
    userData: userDataReducer,
});
export default rootReducer;