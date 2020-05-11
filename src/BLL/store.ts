import {applyMiddleware, combineReducers, createStore} from "redux";
import CounterReducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: CounterReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;