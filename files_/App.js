// App.js
import React from 'react';
import ProductList from './comp/ProductList';
import './App.css';
// Припустимо, що у нас є нове зображення товару з космічною тематикою
import spaceProductImage1 from './assets/1.webp';
import spaceProductImage2 from './assets/2.webp';
import spaceProductImage3 from './assets/3.webp';
import spaceProductImage4 from './assets/4.webp';

const App = () => {
    const products = [
        {
            name: "Космічний Шолом",
            price: 199.99,
            description: "Шолом для дослідників космосу, забезпечений найновішими технологіями.",
            image: spaceProductImage1
        },
        {
            name: "Космічний Рюкзак",
            price: 129.99,
            description: "Місткий рюкзак з водонепроникними відділеннями, ідеально підходить для тривалих подорожей у космосі",
            image: spaceProductImage2
        },

        {
            name: "Астронавтські Чоботи",
            price: 249.99,
            description: "Чоботи для астронавтів, оснащені системою підтримки життєдіяльності та захистом від екстремальних температур.",
            image: spaceProductImage3
        },

        {
            name: "Космічний Кулон",
            price: 199.99,
            description: "Елегантний кулон у формі сузір’я, що світиться у темряві, стане чудовим аксесуаром для кожного.",
            image: spaceProductImage4
        },

    ];

    return (
        <div className="app">
            <h1 className="app-title">Ласкаво просимо до Космічного Магазину</h1>
            <ProductList products={products} />
        </div>
    );
}

export default App;