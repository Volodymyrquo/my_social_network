import {applyMiddleware, combineReducers, createStore} from "redux";
import descriptionReducer from "./descriptionReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers(
    {
        description: descriptionReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)
const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;