import React from 'react';
//redux
import {connect} from 'react-redux';
import { compose } from 'redux';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
//custom components
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
//scss
import './cart-dropdown.scss';
//selector 
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router-dom';
//import {createStructuredSelector} from 'reselect'; -- убрала, чтобы был пример без него 

//history т.к. сам компонент обернут withRouter-ом
//если не передали mdtp можно деструктуризировать dispatch
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? //если просто cartItems? то false никогда не будет 
            //потому что объект, даже пустой, не считается false, а у нас []
            //false будут только 0, false, undefined, null, NaN, "" 
            //тут, кстати, не точное равенство, а == с приведением типов
            cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />)
            : <span className='empty-message'>Your cart is empty</span>
            } 
        </div>
        {/* с link немного лажа получается, но, наверное, можно?
            а поняла, сслыка только вокруг надписи а кнопку обернуть нельзя
            нам тут обязательно onClick на кнопке нужен */}
        <CustomButton onClick={
                () => {
                    history.push('/checkout')
                    //обрати внимание action диспатчим с ()!
                    dispatch(toggleCartHidden())
                    //toggleCartHidden() - если передали mdtp
                }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

//убираем деструктуризацию {cart:{cartItems}}, передаем весь 
//state и вызывам selector 
//!!!использование selector-а предотвратит перерисовку cartdropdown
//!!!компонента, каждый раз, как произошли изменения в state, не относящиеся
//!!!к этому компоненту (например, авторизация пользователя)!!!
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
//тут можно и нужно использовать createStructuredSelector, но 
//оставлю пример без него

//здесь для демонстрации не буду передавть эту функцию
// const mapDispatchToProps = dispath => ({
//                              обрати внимание action диспатчим с ()!
//     toggleCartHidden : () => dispath(toggleCartHidden())
// })

//вместо export default withRouter(connect(mapStateToProps)(CartDropdown));
//порядок важен! но почему именно такой я не разобралась :(
export default compose(
    withRouter, 
    //если мы не передали mapDispatchToProps то все равно connect
    //передаст dispatch как один из props в компонент и мы можем
    //диспатчить экшн в самом компоненте
    connect(mapStateToProps)
)(CartDropdown)