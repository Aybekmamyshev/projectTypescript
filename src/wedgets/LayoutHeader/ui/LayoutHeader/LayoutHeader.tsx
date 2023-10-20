import React from 'react';
import styles from "./header.module.sass"
import Logo from "../Logo/Logo";
import UserLogo from "../UserLogo/UserLogo";
import Heart from "../Heart/Heart";
import Basket from "../Basket/Basket";
import {InputHeader} from "../InputHeader/InputHeader";
export const LayoutHeader = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <Logo/>
                <UserLogo/>
                <InputHeader/>
                <div className={styles.right}>
                    <Heart/>
                    <Basket/>
                </div>
            </div>
        </header>
    );
};

