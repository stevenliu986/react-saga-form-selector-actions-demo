import {createActions, handleActions} from "redux-actions";

export const counterActions = createActions({
    'INCREMENT': f => f,
})
const initialCounterState = {value: 0};
export const counterReducer = handleActions({
    [counterActions.increment]: (state, action) => {
        return {...state, value: state.value + action.payload}
    }
}, initialCounterState)

