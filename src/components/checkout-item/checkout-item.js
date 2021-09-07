import React from 'react';
//redux 
import { connect } from 'react-redux';
import { addItem, deleteItem, deleteItemRowFromCart } from '../../redux/cart/cart-actions';
//scss
import './checkout-item.scss';

//item: {name, imageUrl, price, quantity}
const CheckoutItem = ({ item, deleteItemRowFromCart, addItemToCart, deleteItemFromCart }) => {
    const { name, imageUrl, price, quantity } = item;
    
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name} cart item`} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={()=> deleteItemFromCart(item)}>&#10094;</span> 
                    <span className='value'>{quantity}</span>
                <span className='arrow' onClick={()=> addItemToCart(item)}>&#10095;</span>
            </div>
            <span className='price'>{price}</span>
            {/* не забывай что есть нужно передать что-то в функцию (как тут item) тогда call-back 
            надо оформлять в анонимную функцию! */}
            <div className='remove-button' onClick={()=> deleteItemRowFromCart(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItemRowFromCart: item => dispatch(deleteItemRowFromCart(item)), 
    addItemToCart: item => dispatch(addItem(item)),
    deleteItemFromCart: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);