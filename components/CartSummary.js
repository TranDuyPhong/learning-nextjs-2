import React from 'react';
import Link from 'next/link';
import { Button, Segment, Divider } from 'semantic-ui-react';
import StripeCheckout from 'react-stripe-checkout';

const stripeKey = 'pk_test_5C0o7nrXrqSQryZcLd50laye';

export default ({ handleCheckout, display_price: { with_tax: { amount, currency, formatted } } }) => {
    return (
        <React.Fragment>
            <Divider />
            <Segment clearing size='large'>
                <strong>Sub total: </strong> {formatted}
                <StripeCheckout
                    name='NextJS Demo Store'
                    amount={amount}
                    currency={currency}
                    stripeKey={stripeKey}
                    shippingAddress={false}
                    billingAddress={true}
                    zipCode={true}
                    token={handleCheckout}
                    reconfigureOnUpdate={false}
                    triggerEvent='onClick'
                >
                    <Button color='black' floated='right'>
                        Check out
                    </Button>
                </StripeCheckout>
            </Segment>
        </React.Fragment>
    )
}