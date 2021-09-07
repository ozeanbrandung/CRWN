import React from 'react'
//scss
import './cart-item.scss';

//ЭТО ТОТ САМЫЙ КОМПОНЕНТ КОТОРЫЙ В DROPBOX ОТОБРАЖЕТ ДОЮАВЛЕННЫЙ ITEM
const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={`${name} cart item`} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x {price}$</span>
        </div>
    </div>
)

export default CartItem;