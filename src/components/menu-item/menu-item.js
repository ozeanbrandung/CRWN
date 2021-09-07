import React from 'react';
//router
import {withRouter} from 'react-router-dom';
//with Router нужен чтобы предоставть нужному компон-ту доступ к 
//history.push, match.params и др

//SCSS
import './menu-item.scss';

//так как обмотали withRouter-ом компонент - из пропсов 
//можем деструктурировать history и match и запушить динамические url 
//при onClick на элемент меню с пом-ю history.push
const MenuItem = (props) => {
    
    const {key, title, imageUrl, linkUrl, size, history, match} = props;
    
    const styleBgImg = {
        //url надо заключить в ` `! из-за этого у меня не работало!
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={`menu-item ${size}`} 
             key={key}
             onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            
            {/* style принимает объект % style={ {fontSize: 16px} } */}
            <div style={styleBgImg} className="bg-img"/>

            <div className="content">
                <div className="title">
                    {title}
                </div>
                <div className="subtitle">
                    SHOP NOW
                </div>
            </div>

        </div>
    )
}

export default withRouter(MenuItem);