import { combineReducers } from "redux";

const INITIAL_STATE = {
    current:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    cart: cartReducer
})