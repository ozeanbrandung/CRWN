import React from 'react';
//router
import { Route } from 'react-router';
//custom components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
//scss
import './shop.scss';

//у этого компонента есть доступ к match, потому что он передан в Route 
//в app.js, а Route автоматически передает эти тьри объекта
const ShopPage = ({match}) => (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
)

export default ShopPage;