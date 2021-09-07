import React from 'react';
//redux
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shop-selectors';
import { selectShopLoading } from '../../redux/shop/shop-selectors';
import { selectShopError } from '../../redux/shop/shop-selectors';
//custom components
import CollectionItem from '../../components/collection-item/collection-item';
import Preloader from '../../components/preloader/preloader';
import ErrorIndicator from '../../components/errror-indicator/error-indicator';
//scss
import './collection.scss';

//СТРАНИЦА ОДНОЙ КОЛЛЕКЦИИ - ИСКЛЮЧИТЕЛЬНО ОДНОЙ! СО ВСЕМИ ЕЕ ТОВАРАМИ

//в компоненте shopPage был route через который и передана эта стр
//поэтому есть доступ к match и history
const CollectionPage = ({collection, match, loading, error}) => {

    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <ErrorIndicator/>
    }
  

        console.log(collection) //- проверяем какой объект нам прилетает, 
        //поскольку мапиться надо по внутреннему массиву объекта
        const {title, items} = collection;
        
        const allCollectionItems = items.map(collectionItem => 
                                                <CollectionItem key={collectionItem.id} item={collectionItem}/>
                                            )
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {allCollectionItems}
            </div>
        </div>
    )

}

 

//ownProps собственные props-ы компонента, который мы оборачиваем! 
// ОХУЕННАЯ ВЕЩЬ 
const mapStateToProps = (state, ownProps) => ({
    //не забыть передать state в селектор!
    //хитровыебанный самописный селектор, работу которого я не до конца понимаю вообще-то
    
    //это все не сработает если попробовать попасть сразу по url на эту стр
    //поскольку данные еще не успевают подтянуться с сервера в state и мы получим initial_state - пустой массив! 
    
    loading: selectShopLoading(state), 
    error: selectShopError(state),
    collection: selectCollection(ownProps.match.params.collectionId)(state), 
})
export default connect(mapStateToProps)(CollectionPage);