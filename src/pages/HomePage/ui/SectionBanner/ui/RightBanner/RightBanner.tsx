import React from 'react';
import styles from "./rightBanner.module.sass"
import img from "./Rectangle 14.svg"
const RightBanner = () => {
    return (
        <div className={styles.block}>
            <img src={img} alt=""/>
        </div>
    );
};

export default RightBanner;