import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    //console.log(cart)
    //console.log(props);

    //const totalReducer = (previous, product) => previous + product.price;
    //const total = cart.reduce(totalReducer, 0);
    
    //const totalquantity = cart.reduce ((previous, product) => previous + product.quantity, 0);
    //const total = cart.reduce( (previous, product) => previous + product.price, 0);
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        console.log( product.Quantity)

    } 

    const shipping = total> 0 ? 20 : 0;
    const tax = (total + shipping) * 0.15;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Orderd: {totalQuantity}</h5>
            <p>Total Price: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: { tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
            <p></p>
        </div>
    );
};

export default Cart;