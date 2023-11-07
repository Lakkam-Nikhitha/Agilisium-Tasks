import React, { useEffect, useState } from 'react'

import Product from './Product';
import Cart from './Cart';
import axios, { Axios } from 'axios';
import { Stack } from '@mui/material';

function MyCart() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch products from an API
        axios.get('https://dummyjson.com/products?limit=6')
            .then((response) => setProducts(response.data.products))
            // .then((response) => console.log(response.data))

            .catch((error) => console.error(error));
    }, []);

    // Fuction to add Item to Cart
    const addToCart = (product) => {

        if (cart.some((item) => item.id === product.id)) {
            alert('Product is already in the cart!');
        } else {
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            calculateTotalPrice(updatedCart);
        }
    };

    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    };

    // Funtion to remove Cart Item
    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    return (
        <div className="App">
            <h1>React Shopping Cart</h1>
            <p>Total Cart Price: {totalPrice}</p>
            <div className="container">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 2 }}
                >
                    <div className="product-container">
                        <h2>Products</h2>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 3 }} useFlexGap flexWrap="wrap"
                        >
                            {products && products.map((product, index) => (
                                <Product key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </Stack>
                    </div>
                    <Cart cart={cart} removeFromCart={removeFromCart} calculateTotalPrice={calculateTotalPrice} />
                </Stack>
              
            </div>
        </div>
    );
}

export default MyCart;