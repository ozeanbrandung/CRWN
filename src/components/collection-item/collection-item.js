import React from 'react';
//Redux
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';
//custom components
import CustomButton from '../custom-button/custom-button';
//SCSS
import './collection-item.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    
    const bgImg = {
        backgroundImage: `url(${imageUrl})`
    }
    
    return(
        <div className="collection-item"> 
            
            <div className="image" style={bgImg} />
            
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div> 

            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);