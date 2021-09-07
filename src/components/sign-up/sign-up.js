import React, { Component } from 'react';
//Firebase
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
//CUSTOM COMPONENTS
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
//CSS
import './sign-up.scss';

const SignUp = ({state:{displayName, email, password, confirmPassword}, handleSubmit, handleTyping}) => {
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                
                <FormInput  handleTyping={handleTyping}
                            type='text'
                            name='displayName'
                            value={displayName}
                            label='Display Name'
                            required/>
                <FormInput  handleTyping={handleTyping}
                            type='email'
                            name='email'
                            value={email}
                            label='Email'
                            required/>
                <FormInput  handleTyping={handleTyping}
                            type='password'
                            name='password'
                            value={password}
                            label='Password'
                            autoComplete='off'
                            required/>
                <FormInput  handleTyping={handleTyping}
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            label='Confirm Password'
                            autoComplete='off'
                            required/>

                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    )
}

class SignUpContainer extends Component {
    state = {
        displayName: '',
        email: '', 
        password: '', 
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match!")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            //когда новый пользователь создан сбрасываем state и очищаем таким образом поля
            this.setState({
                displayName: '',
                email: '', 
                password: '', 
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err);
        }

    }

    handleTyping = event => {
        const {name, value} = event.target;

        this.setState({ [name] : value})
    }

    render() {
        return <SignUp  handleTyping={this.handleTyping} 
                        handleSubmit={this.handleSubmit} 
                        state={this.state}/>
    }
}

export default SignUpContainer;