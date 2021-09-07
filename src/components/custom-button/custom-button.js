import React from 'react';
//CSS
import './custom-button.scss';

//children - очень важная хуйня! они позволяют делать компоненты 
//универсальными! в данном случае передавать разные назвыания для конки
//стили передаем с помощью всяких флажков, которые добавляем при непосредственном 
//использовании самой кнопки: (isGoogleSignIn, inverted)
const CustomButton = ({children, isGoogleSignIn, inverted, ...props}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}
                        ${inverted ? 'inverted' : ''} custom-button`} 
                        {...props}>
        {children}
    </button>

)

export default CustomButton;