export const addItem = cartIndex => (
    {
        type:'ADD_ITEM',
        payload: cartIndex
    }
);
export const resetCart = cartIndex => (
    {
        type:'RESET_CART',
        payload: cartIndex
    }
)
export const delItem = itemIndex => (
    {
        type:'DEL_ITEM',
        payload: itemIndex
    }
);