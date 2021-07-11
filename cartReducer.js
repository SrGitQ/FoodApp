import { combineReducers } from "redux";

const INITIAL_STATE = {
    current:"Hola carnal"
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const {
                current
            } = state
            const addedItem = action.payload

            current.push(addedItem)

            const newState = { current }

            return newState

        default:
            return state
    }
}

export default combineReducers({
    items: cartReducer
})