import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //Products to be rendered on UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        });
    }, []);

/////

    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
               const addedProduct = products.find(product => product.key === key);
               if(addedProduct){
                   const quantity = savedCart[key];
                   addedProduct.quantity = quantity;
                   storedCart.push(addedProduct);
               }
               
            }
            setCart(storedCart);
        }
    }, [products]);

const student1= {name: "rafique", marks: 79, result: "A+"};

console.log(student1.mark + 1);

///////

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // save to localStorage (for now)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchProduct = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setDisplayProducts(matchProducts);
        //console.log(matchProducts.length);
    }

    return (
        <div>
            <div className="search-container">
                <input 
                    type="text"
                    onChange={handleSearch} 
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product 
                           key={product.key}
                           product={product}
                           handleAddToCart={handleAddToCart}/>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;