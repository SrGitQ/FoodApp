import { combineReducers } from "redux";

const INITIAL_STATE = {
    counter:{ amount: 0 },
    items:[]
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            var {
                counter,
                items
            } = state
            var addedItem = action.payload
            


            if(items.some( item => item.id === addedItem.id)){
                items.map( (item, i) => {
                    if (item.id === addedItem.id){
                        items[i].cant++
                    }
                })

            } else{
                items.push(addedItem)
            }
            
            counter.amount++
    
            var newState = { counter, items }

            return newState

        case 'DEL_ITEM':
            var {
                counter,
                items
            } = state
            var delItem = action.payload

            var aux = null

            items.map( (item, i) => {
                if (item.id === delItem.id){
                    if(item.cant > 1){
                        item.cant--
                    } else{
                        aux = i
                    }
                }
            })
            if (aux != null){
                items.splice(aux,1)
            }
            
            counter.amount--
    
            var newState = { counter, items }

            return newState            
        default:
            return state
    }
}

export default combineReducers({
    items: cartReducer
})