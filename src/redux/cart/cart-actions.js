import {CartActionTypes} from './cart-types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM, 
    payload: item 
})

export const deleteItem = item => ({
    type: CartActionTypes.DELETE_ITEM, 
    payload: item 
})

export const deleteItemRowFromCart = item => ({
    type: CartActionTypes.DELETE_ITEM_ROW_FROM_CART, 
    payload: item 
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

