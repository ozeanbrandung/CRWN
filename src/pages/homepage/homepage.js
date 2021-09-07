import React from "react";
//redux 
import { connect } from "react-redux";
//reselect lib 
import {createStructuredSelector} from 'reselect';
//
import { selectMenuLoading } from '../../redux/menu/menu-selectors';
import { selectMenuError } from '../../redux/menu/menu-selectors';
//import CUSTOM COMPONENTS
import MenuListContainer from "../../components/menu-list/menu-list";
import Preloader from '../../components/preloader/preloader';
import ErrorIndicator from '../../components/errror-indicator/error-indicator';
//import SCSS
import './homepage.scss';


const Homepage = ({loading, error}) => {
    if (loading) {
      return <Preloader/>
    }
    if (error) {
      return <ErrorIndicator/>
    }
    return (
        <div className="homepage">
            <MenuListContainer/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectMenuLoading, 
    error: selectMenuError
  })

export default connect(mapStateToProps)(Homepage);