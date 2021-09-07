import {createSelector} from 'reselect';
//2 типа селекторов:
//input selector - не использует createSelector
//output selector - использует input selectors и createSelector

//input selector 
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    //метод массива reduce 
    cartItems => cartItems.reduce(
        //0 - начальное значен accumilatedQuantity
        ( (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity), 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    //на вход функции подаются cartItem-ы которые уже вычленены селектом карт айтемс выше
    cartItems => cartItems.reduce(
       ( (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.price * cartItem.quantity), 0
    )
)