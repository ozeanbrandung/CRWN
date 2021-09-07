//принимаем на вход массив элементов в корзине 
//и элемент, который надо добавить 
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id )

    if (existingCartItem) {
        //map возвратит новый массив, что нам и нужно в общем-то
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? 
            //если в массиве есть объект такой же как добавляем
            //то делаем копию объекта и меняем поле quantity
            {...cartItem, quantity: cartItem.quantity + 1}
            //если натыкаемся на другой объект,
            //не такой, как добавляем, то возвращем, как было
            : cartItem)
    }
    //если нас не выплюноло с функции на if (т.е. в уже добавленных эл-ах
    //нет того который хотим добавить), то добавляем его в массив
    //и устанавливаем начальное значение quantity
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    if (cartItemToDelete.quantity !== 1) {
        return cartItems.map(
            cartItem => 
            cartItem.id === cartItemToDelete.id ? 
            {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
        )
    } else {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
    }
}