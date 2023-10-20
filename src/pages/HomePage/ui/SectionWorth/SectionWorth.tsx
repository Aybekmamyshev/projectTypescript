import React from 'react';
import styles from "./sectionWorth.module.sass";
import {useGetProductQuery} from "../../../../entities/cardTrend";
import {useAppSelector} from "../../../../shared/model";

export const SectionWorth = () => {
    const {data} = useGetProductQuery()
    const {number} = useAppSelector((store) => store.number)
    const product = data && data.filter((_, i) => i < number)
    return (
        <div className={styles.trend}>
            <h2 className={styles.h2}>Worth seeing</h2>
            <div className={styles.wrapper}>
                {
                    product && product.map((item) => {
                        return (
                            <div key={item.id} className={styles.card}>
                                <div className={styles.picture}>
                                    <img src={item.category!.image} className={styles.img} alt=''/>
                                </div>
                                <div className={styles.content}>
                                    <h2 className={styles.h2}>{item.category!.name}</h2>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};
