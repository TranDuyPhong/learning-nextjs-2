import React from 'react';
import { Input, Button, Label } from 'semantic-ui-react';

import { addToCart } from '../lib/moltin';

export default class AddToCart extends React.Component {
    state = {
        loading: false,
        quantity: 1
    }

    _handleChange = ({ target: { value } }) => {
        this.setState({
            quantity: value
        });
    }

    _handleSubmit = async () => {
        const { productId } = this.props;
        const { quantity } = this.state;
        this.setState({
            loading: true
        });
        await addToCart(productId, quantity);
        this.setState({
            loading: false
        });
    }

    render() {
        const { loading, quantity } = this.state;
        return (
            <Input 
                type='number'
                placeholder='Quantity'
                value={quantity}
                onChange={e => this._handleChange(e)}
                action={{
                    color: 'orange',
                    content: 'Add to Cart',
                    icon: 'plus cart',
                    onClick: this._handleSubmit,
                    loading,
                    disabled: loading
                }}
            />
        )
    }
}