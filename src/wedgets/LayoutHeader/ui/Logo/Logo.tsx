import React from 'react';
import {Link} from "react-router-dom";
import logo from "./LOGO 1.svg"
import styles from "./logo.module.sass"
const Logo = () => {
    return (
        <Link className={styles.logo} to={''}>
            <div className={styles.img}>
                <img className={styles.img} src={logo} alt="Logo"/>
            </div>
        </Link>
    );
};

export default Logo;