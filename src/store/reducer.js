import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../modules/login/reducer/loginReducer";

const store = createStore(
    combineReducers(
        {
            loginReducer
        }
    ),
    compose(
        applyMiddleware(
            thunk
        )
    )
);

export default store;