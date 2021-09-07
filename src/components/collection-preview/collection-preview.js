import React from 'react';
//router
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
//custom components
import CollectionItem from '../collection-item/collection-item';
//import CSS
import './collection-preview.scss';

//ПРЕВЬЮ ОДНОЙ КОЛЛЕКЦИИ ИЗ 4-Х COLLECTION-ITEM-СОВ
const CollectionPreview = (props) => {
    const {title, routeName, items, match} = props;

    //filter: принимаем item и его индекс в массиве 
    //выводим только 4 элемента, остальные скрываем, поскольку 
    //это превью, а в самом массиве дохулион item-ов
    const collectionItems = items.filter((item, idx) => idx<4)
                           .map(item => <CollectionItem key={item.id} item={item}/>)

    return(
        <div className="collection-preview">
             <Link to={`${match.path}/${routeName}`}>
                <h1  className="title">{title}</h1>
             </Link>
            <div className="preview">
                {collectionItems}
            </div>
        </div>
        
    )
}

export default withRouter(CollectionPreview);