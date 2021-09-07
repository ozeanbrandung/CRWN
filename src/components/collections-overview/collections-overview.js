import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {getShopToStore} from '../../redux/shop/shop-actions';
//HOC обеспечивающий доступ к crwnService - истансу класса CrwnService
import { withCrwnService } from '../../services/crown-provider/with-crwn-service';
//reselect
import { selectShopSections } from '../../redux/shop/shop-selectors';
import {createStructuredSelector} from 'reselect';

//custom components
import CollectionPreview from '../collection-preview/collection-preview';
//scss
import './collections-overview.scss';

class CollectionsOverviewContainer extends Component {
    componentDidMount() {   
        this.props.fetchAndStoreShop()
        //this.props.dispatch(getShopToStore(this.props.crwnService)) - это без mdtp
    }

    render(){
        return(
            <CollectionsOverview collections={this.props.collections} />
        )
    }
}

//ЭТО СТРАНИЦА СО ВСЕМИ ПРЕВЬЮ ВСЕХ КОЛЛЕКЦИЙ
const CollectionsOverview = ({collections} ) => {
    const collectionPreviews = collections.map(
        ({id, ...item}) => <CollectionPreview key={id} {...item}/>
    )
    return (
    <div className='collections-overview'>
        {collectionPreviews}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectShopSections
})

//ownProps - props которые УЖЕ были у копонента до его connect-а
//нужно нам, чтобы получить доступ к сервису! переданному провайдером
const mapDispatschToProps = (dispatch, ownProps) => ({
    //getShopToStore - thunk - которая получает сначала shop от сервера
    //а потом dispatch-ит его сразу же в store
    //на вход ей нужно подать сервис 
    fetchAndStoreShop: () => dispatch(getShopToStore(ownProps.crwnService))
})

export default compose(
    withCrwnService(),
    //ессли не передать mdtp то он автоматически передастся в компонент
    connect(mapStateToProps, mapDispatschToProps)
)(CollectionsOverviewContainer)