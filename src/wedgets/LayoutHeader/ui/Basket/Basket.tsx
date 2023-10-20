import React from 'react';
import {Link} from "react-router-dom";
import basket from "./16051444861606988091 1.svg"
import styles from "./basket.module.sass"
import {useAppSelector} from "../../../../shared/model";

const Basket = () => {
    const {user} = useAppSelector((store) => store.user)
    const {cart} = useAppSelector((store) => store.cart )
    return (
        <Link className={styles.basket} to={`${user?.email.length ? '/cart' : ''}`}>
            <img src={basket} alt="Basket"/>
            {
                user?.email ? <h2  className={styles.count}>{cart.length}</h2> : ""
            }
        </Link>
    );
};

export default Basket;