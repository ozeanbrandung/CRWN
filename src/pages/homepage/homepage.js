import React from "react";
//import CUSTOM COMPONENTS
import MenuListContainer from "../../components/menu-list/menu-list";
//import SCSS
import './homepage.scss';


const Homepage = () => {
    return (
        <div className="homepage">
            <MenuListContainer/>
        </div>
    )
}

export default Homepage;