import React from 'react';
import styles from "./heart.module.sass"
import {Link} from "react-router-dom";
import heart from "./17079954331574330926 1.svg"
const Heart = () => {
    return (
        <Link to={'/heart'} className={styles.heart}>
            <img src={heart} alt="Heart"/>
        </Link>
    );
};

export default Heart;