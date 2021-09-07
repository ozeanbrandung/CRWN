import {CartActionTypes} from './cart-types';
import { addItemToCart, deleteItemFromCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true, 
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //возвращаем по св-ву объекта ключ, который является 
        //строкой
        case CartActionTypes.TOGGLE_CART_HIDDEN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }

        case CartActionTypes.ADD_ITEM: {
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
                // cartItems: [
                //     ...state.cartItems, 
                //     action.payload
                // ]
            }
        }
        
        case CartActionTypes.DELETE_ITEM: {
            return {
                ...state, 
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        }

        case CartActionTypes.DELETE_ITEM_ROW_FROM_CART: {
            return {
                ...state, 
                cartItems: state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                    )
                // [
                //     ...state.cartItems.slice(0, action.payload.id),
                //     ...state.cartItems.slice(action.payload.id+1),
                // ]
            }
        }

        case CartActionTypes.CLEAR_CART: {
            return {
                ...state, 
                cartItems: []
            }
        }

        default: 
            return state;
    }
}

export default cartReducer;