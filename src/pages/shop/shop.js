import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { Route } from 'react-router';
//reselect
import { createStructuredSelector } from 'reselect';
import { selectShopLoading } from '../../redux/shop/shop-selectors';
import { selectShopError } from '../../redux/shop/shop-selectors';
//custom components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import Preloader from '../../components/preloader/preloader';
import ErrorIndicator from '../../components/errror-indicator/error-indicator';
//scss
import './shop.scss';

//у этого компонента есть доступ к match, потому что он передан в Route 
//в app.js, а Route автоматически передает эти тьри объекта
const ShopPage = ({match, error, loading}) => {
    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <ErrorIndicator/>
    }
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
)}

const mapStateToProps = createStructuredSelector({
    loading: selectShopLoading, 
    error: selectShopError
})

export default connect(mapStateToProps)(ShopPage);