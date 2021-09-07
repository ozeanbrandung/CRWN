import React from 'react';
//Redux
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
//selector lib
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
//SCSS
import './cart-icon.scss';
//svg
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemsCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    //mstp постоянно вызывается, даже когда изменился state
    //не имеющий отношения к той части стейта, что нужна в этом компоненте

    //деструктуризация state не помогает, нужно использовать 
    //библиотеку reselect и писать selector-ы тех частей state-а
    //что нужны нам 
     
    //selectors, memoization - уроки 129-130!
    
    //используем selector! чтобы mstp не вызывыался постоянно когда 
    //не нужен
    // убираем {cart: {cartItems}} и передвем весь state! 
    itemsCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);