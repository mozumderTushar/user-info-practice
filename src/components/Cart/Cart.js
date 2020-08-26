import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
         total = total + Number(element.salary)
    }
    return (
        <div className="display-info">
            <h3>Friend Added: {cart.length} </h3>
            <p>Total Salary: ${total} </p>
        </div>
    );
};

export default Cart;