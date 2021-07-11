import { combineReducers } from "redux";

const INITIAL_STATE = {
    counter:{ amount: 0 }
}

export const cartReducer = (state = INITIAL_STATE, action) => {
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