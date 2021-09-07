import React, { Component } from 'react'
//Firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

//CUSTOM COMPONENTS
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
//SCSS
import './sign-in.scss';

const SignIn = ({state:{email, password}, handleSubmit, handleTyping}) => (
    <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>

            <FormInput  name='email' 
                        type='email' 
                        value={email} 
                        handleTyping={handleTyping} 
                        required
                        
                        label='email'/>
            {/* <label>Email</label> -- вместо этого указали в props у FormInput label*/}
            
            <FormInput name='password' 
                       type='password' 
                       value={password} 
                       autoComplete='off'
                       handleTyping={handleTyping} 
                       required 
                       
                       label='password'/>

            {/* <input type='submit' value='Submit Form'/> -- так же будет работать как и button*/}
            <div className='buttons'>
                <CustomButton type='submit'>
                    SIGN IN
                </CustomButton>
                {/* signInWithGoogle у нас импортирован */}
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    SIGN IN WITH GOOGLE
                </CustomButton>
            </div>  
        </form>
    </div>
)

class SignInContainer extends Component {
    //отвечает за отображение символов в input-ах
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (err) {
            console.log(err)
        }

        
    }

    handleTyping = event => {
        const {value, name} = event.target;
        //каждому input мы присвоили поле name которое совпадает с полем state
        //т.е. name='password' и name='email'
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <SignIn state={this.state} handleSubmit={this.handleSubmit} handleTyping={this.handleTyping}/>
        )
    }
}

export default SignInContainer;