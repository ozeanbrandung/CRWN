import React from 'react';
//SCSS
import './error-indicator.scss';
//svg
import errorIcon from '../../assets/error.svg';

const ErrorIndicator = () => (
    <div className="error-indicator">
        <img className="icon" src={errorIcon} alt='error-icon' />
        <p>Something had gone wrong, please inform us about this ploblem 
        at the following e-mail-adress: <strong>blabla@gmail.com</strong></p>
    </div>
)

export default ErrorIndicator;