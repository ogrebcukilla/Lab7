import React from 'react';

const ProductCard = ({ name, price, description, image }) => (
    <div className="product-card" style={{ border: '1px solid #333', padding: '20px', margin: '10px', borderRadius: '10px', backgroundColor: '#f0f0f0' }}>
        <img className="product-image" src={image} alt={name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
        <div className="product-details">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">Ціна: ${price}</p>
        </div>
    </div>
);

export default ProductCard;