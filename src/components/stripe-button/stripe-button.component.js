import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Iv12TSBKqyYFLG5q2TfbMRCTaDrFTuQIckPXQ8ZMbDm8fB7KVm0cOj3DOKuduxQtzVEqNCBsKti5yujb9eIbELX00q0wAm68N';

    const onToken = token => {
        console.log(token);
        alert('Payment is Done!!!')
    }

    return (
        <div>
            <StripeCheckout 
                label='Pay Now'
                name='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now!!'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;