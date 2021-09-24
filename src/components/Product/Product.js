import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, category, price, seller, star, stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name} </h3>
                <h4>Price: {price}$</h4>
                <p><small>By: {seller}</small></p>
                <p>category: {category}</p>
                <p>Rating: {star}</p>
                <Rating   
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    initialRating={star}
                    fractions={2}/>
                <p>Only <small className="stock">{stock}</small> left in stock - Order Soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="cart-button">{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;