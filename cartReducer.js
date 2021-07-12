import { combineReducers } from "redux";

const INITIAL_STATE = {
    counter:{ amount: 0 },
    items:[]
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const {
                counter,
                items
            } = state
            const addedItem = action.payload
            
            if(items.some( (item) => item.id === addedItem.id)){
                items[i].cant++
            } else{
                items.push(addedItem)
            }


            counter.amount++

            const newState = { counter, items }

            return newState

        default:
            return state
    }
}

export default combineReducers({
    items: cartReducer
})