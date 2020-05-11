import counterApi from "../DAL/api";
import {AppStateType} from "./store";

export const GET_VALUE_SUCCSESS = "counter/counterReducer/GET_VALUE_SUCCSESS"
export const INCREMENT_VALUE_SUCCSESS = "counter/counterReducer/INCREMENT_VALUE_SUCCSESS"

const initialState = {
    value: 0 as number
}
type InitialStateType = typeof initialState;

const CounterReducer = (state: InitialStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case GET_VALUE_SUCCSESS: {
            return {
                ...state, value: action.value
            }
        }
        case INCREMENT_VALUE_SUCCSESS: {
            return {
                ...state, value: action.counterValue
            }
        }
        default:
            return state

    }
};

//Action Creators

const actions = {
    getValueSuccsess:(value: number) => ({type: GET_VALUE_SUCCSESS, value}),

    incrementValueSuccsess:(counterValue: number) => ({type: INCREMENT_VALUE_SUCCSESS, counterValue})
}



type ActionsType = any


//Thunk creators

export const getValue = () => async (dispatch: any, getState: any) => {
    const counterValue = await counterApi.getCounterValue();
    dispatch(actions.getValueSuccsess(counterValue))
};

export const incrementValue = () => async (dispatch: any, getState: () => AppStateType) => {
    let currentValue = getState().counter.value;
    let newValue = currentValue + 1;
    let result = await counterApi.incrementValueApi(newValue);
    dispatch(actions.incrementValueSuccsess(result));
    console.log('result: ', result)
}
export default CounterReducer;