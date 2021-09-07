import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import icon from '../../assets/favicon.ico';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe  = price*100;
    const publishableKey = 'pk_test_51JWyR4Fs3mujJ2cvIIehV1uEXjvJPcnOO4ogl6tEBjgfIUH6QDxyH67nmhQdlESnuOB8uH4tblFZt2wGp44lpxbD00b5TAwzvz'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image={icon}
        // image='https://svgshare.com/i/Cuz/svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;