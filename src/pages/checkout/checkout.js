import React from 'react';
//redux
import { connect } from 'react-redux';
//reselect
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors';
//STRIPE PAYMENTS
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
//custom components
import CheckoutItem from '../../components/checkout-item/checkout-item';
//scss
import './checkout.scss';

const CheckoutPage = ({cartItems, totalPrice}) => {
    const itemRows = cartItems.map(
        cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
    return (
        <div className='checkout-page'>
            <div className='checkout-header' >
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {itemRows}

            <div className='total'>
                <span>TOTAL: {totalPrice}$</span>
            </div>

            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                Visa: 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            
            <StripeCheckoutButton price={totalPrice} />

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    totalPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);