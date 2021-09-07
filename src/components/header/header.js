import React from 'react';
//React
import {connect} from 'react-redux'
//router
import { Link } from 'react-router-dom';
//firebase
import {auth} from '../../firebase/firebase.utils';
//reselect lib
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';

//custom components
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
//SCSS
import './header.scss';
//svg
import {ReactComponent as Logo} from '../../assets/crown.svg'


const Header = ({currentUser, dropdownIsHidden }) => {
    return (
        <div className='header'>

            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>

                <Link to='/contact' className='option'>
                    CONTACT
                </Link>

                {currentUser? 
                <div className="option" onClick={()=> auth.signOut()}>LOG OUT</div>
                :
                (<Link to='/signin' className='option'>
                    SIGN IN
                </Link>) }
                
                <CartIcon  />
            </div>

            { dropdownIsHidden? null : <CartDropdown/>}

        </div>
    )
}

//nested destucturing: {user: {currentUser}, cart: {hidden}}
//вместо этого используем reselect
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     dropDownIsHidden: selectCartHidden(state)
// })

//более короткий вариант mstp с createStructuredSelector!
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    dropdownIsHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);