import React from 'react';
import styles from "./leftBanner.module.sass"
import Button from "../../../../../../shared/ui/Button/Button";
import phone from "./image 3.svg"
import shoes from "./image 4.svg"

const LeftBanner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.block}>
                <h2 className={styles.h2}>NEW YEAR</h2>
                <h3 className={styles.h3}>SALE</h3>
                <Button children={'See more'}  type={'button'} isLoading={true} className={'bannerBtn'}/>
            </div>
            <div className={styles.phone}>
                <img src={phone} alt=""/>
            </div>
            <div className={styles.shoes}>
                <img src={shoes} alt=""/>
            </div>
        </div>
    );
};

export default LeftBanner;