import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);//declare useState for products
    const [cart, setCart] = useState([]);

    //useEffect for fetching data
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


//declare eventhandler here
    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} eventHandler={handleAddToCart}></Product>)
                }
            </div>
            
            <div className='order-summery-container'>
                <h3>hello orders</h3>
                <p>selected item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;