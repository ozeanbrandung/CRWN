import React from 'react';
//CUSTOM COMPONENTS
import SignInContainer from '../../components/sign-in/sign-in';
import SignUpContainer from '../../components/sign-up/sign-up';
//SCSS
import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignInContainer/>
            <SignUpContainer/>
        </div>
    )
}

export default SignInAndSignUpPage;