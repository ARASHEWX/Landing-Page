import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpeg";

const Banner = () => {
    return(
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>Wellcome</h1>
                <p>
                    To Our <span>Exhibition</span>
                </p>
            </div>
        </div>
    );
}

export default Banner;