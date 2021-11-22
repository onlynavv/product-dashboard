import React from 'react'
import './ProductItem.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ProductItem = ({name, price, rating, image, stock, status}) => {

    return (
        <div className="product-container">
            <img src={image} alt={name}></img>
            <div className="product-body align-center">
                <h5>{name}</h5>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                </Stack>
                <p>₹ {price}</p>
            </div>
            <div className="stock-div">
                <p>{stock} items</p>
                <p className={status === "in stock" ? "available-color" : "nonavail-color"}>{status}</p>
            </div>
            <div className="product-buttons align-center">    
                <button className="add-btn" disabled={stock === "0" ? true : false}>Add Item</button>
            </div>
        </div>
    )
}

export default ProductItem
