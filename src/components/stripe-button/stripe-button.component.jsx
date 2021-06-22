import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishabheKey = 'pk_test_51J5EjoB4UYEDdm2vtCWK1dg6BNoPBFbn5jHMSu31xGH0THuZwZmVAJBBsyntzUUgGklAKo9sbyLuicNk3uP0nrlA002SxNEmYs';

    const onToken = token => {
        console.log(token)
        alert('success')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Cloating Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishabheKey}
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton;