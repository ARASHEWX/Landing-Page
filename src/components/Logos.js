import React from 'react';
import styles from './Logos.module.css';
import benz from '../images/benz-logo.png';
import bmw from '../images/bmw-logo.png';
import chevrolet from '../images/chevrolet-Logo.png';

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us ?</h3>
            <div>
                <img src={bmw} alt="logo"/>
                <img src={chevrolet} alt="logo"/>
                <img src={benz} alt="logo"/>
            </div>
        </div>
    );
};

export default Logos;