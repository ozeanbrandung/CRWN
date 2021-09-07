import React, { Component } from 'react'; 
//redux
import { connect } from 'react-redux';
import { compose } from 'redux';
import {getMenuToStore} from '../../redux/menu/menu-actions';
//reselect
import { selectMenuSections } from '../../redux/menu/menu-selectors';
import {createStructuredSelector} from 'reselect';
//service provider
import {withCrwnService} from '../../services/crown-provider/with-crwn-service';

//CUSTOM COMPONENTS
import MenuItem from '../menu-item/menu-item';
//SCSS
import './menu-list.scss';


class MenuListContainer extends Component {

    componentDidMount() {
        //this.props.dispatch(getMenuToStore(this.props.crwnService)) - это без передачи mdtp
        this.props.fetchAndStoreMenuList();
    }
  
    render(){
        return(
            <MenuList menuItems={this.props.sections}/>
        )
    }
}

const MenuList = ({menuItems}) => {
    //в map не item весь передаем, а деструктурируем нужное!
    //id деструктурируем, остальное передаем как есть 
    //под теми именами что в объекте
    const allMenuItems = menuItems.map( ({id, ...props}) => {
                                            return <MenuItem key={id} {...props}/>
                                        })
    return (
        <div className="menu-list">
            
            {allMenuItems}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchAndStoreMenuList: () => dispatch(
                                    getMenuToStore(ownProps.crwnService)
                                )
})
export default compose(
            withCrwnService(),
            connect(mapStateToProps, mapDispatchToProps)
        )(MenuListContainer);