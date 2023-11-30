import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import axios from "axios";


function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API and set them in the state.
    // You can use Axios or any other library for API calls.
    // Replace 'API_URL' with the actual API endpoint.
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Show an alert for adding the product to the cart.
    alert("Product added to cart");
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            {cart.find((item) => item.id === product.id) ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
