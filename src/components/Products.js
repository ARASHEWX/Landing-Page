import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Products.module.css"
import Card from './Card';

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then(response => setData(response.data));
    }, []);

    return (
        <>
            <div className={styles.container}>
                {
                data.length ?
                data.map(item => <Card key={item.id} image={item.image} name={item.title} cost={`${item.price} $`} />):
                <h1>Loading ...</h1>
                }
            </div>
        </>
    );
};

export default Products;