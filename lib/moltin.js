import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
});

export const getProducts = () => {
    return Moltin.Products.With('main_images').All();
}

export const getProductById = id => {
    return Moltin.Products.With('main_image').Get(id);
}

export const addToCart = (productId, quantity) => {
    return Moltin.Cart().AddProduct(productId, quantity);
}

export const getCartItems = (id) => {
    return Moltin.Cart(id).Items();
} 

export const removeFromCart = (itemId, cartId) => {
    return Moltin.Cart(cartId).RemoveItem(itemId);
}

export const checkoutCart = (cartId, customer, billing) => {
    return Moltin.Cart(cartId).Checkout(customer, billing);
}

export const payForOrder = (orderId, token, email) => {
    return Moltin.Orders.Payment(orderId, {
        gateway: 'stripe',
        method: 'purchase',
        payment: token,
        options: {
            receipt_email: email
        }
    });
}

export const register = async ({ email, password, ...rest }) => {
    const { data: { name, id } } = await Moltin.Customers.Create({
        type: 'customer',
        email,
        password,
        ...rest
    }); 
    const { token } = await login({email, password});
    return {
        id,
        name,
        email,
        token
    }
}

export const login = async ({ email, password }) => {
    const { data: { token } } = await Moltin.Customers.Token(email, password);
    return {
        token
    }
}