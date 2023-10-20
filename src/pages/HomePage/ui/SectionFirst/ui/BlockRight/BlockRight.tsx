import React from 'react';
import photo from "./image 1 (1).svg"
import styles from "./blockRigth.module.sass"
import Button from "../../../../../../shared/ui/Button/Button";
 const SectionFirst = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>BIG SALE 20%</h2>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h3 className={styles.h3}>the bestseller of 2022 </h3>
                    <h4 className={styles.h4}>LENNON r2d2
                        with NVIDIA 5090 TI</h4>
                    <div className={styles.btn}>

                    </div>
                    <Button className={'blockBtn'} children={'Shop Now'} type={'button'} isLoading={true}/>
                </div>
                <div className={styles.right}>
                    <img src={photo} alt="computer"/>
                </div>
            </div>
        </div>
    );
};

export  default SectionFirst