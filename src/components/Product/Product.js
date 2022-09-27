import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img:image, name, price, ratings, seller} = props.product;//destructuring
    // console.log(img);
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={image} alt=''></img>
                <p>{name}</p>
                <p>Manufacturer: {seller}</p>
                <p>Price: {price}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>props.eventHandler(props.product)} className='product-btn'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;