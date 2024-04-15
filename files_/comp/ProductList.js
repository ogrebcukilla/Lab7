import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
    <div className="product-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map((product, index) => (
            <ProductCard key={index} {...product} />
        ))}
    </div>
);

export default ProductList;