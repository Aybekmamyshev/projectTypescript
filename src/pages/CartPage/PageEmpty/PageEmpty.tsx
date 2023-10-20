import React from 'react';
import styles from "./pageEmpty.module.sass"
import image from "./empty_cart.svg"
const PageEmpty = () => {
    return (
        <div className={styles.block}>
            <h2 className={styles.h2}>Страница пуста</h2>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default PageEmpty;