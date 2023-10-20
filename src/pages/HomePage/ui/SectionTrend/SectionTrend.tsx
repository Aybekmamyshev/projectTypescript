import React from 'react';
import styles from "./sectionTrend.module.sass"
import Button from "../../../../shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../../shared/model";
import {plusProduct} from "../../../../entities/cardTrend/model/slice";
import {TypeProduct} from "../../../../entities/cardTrend/api/type";
import Card from "../../../../shared/ui/Card/Card";

interface TypeList {
    list : TypeProduct[],
    title: string
}
export const SectionTrend = ({list,title} : TypeList) => {
    const dispatch = useAppDispatch()
    const {number} = useAppSelector((store) => store.number)
    const product = list && list.filter((_,i) => i < number )
    return (
        <section className={styles.trend}>
            <h2 className={styles.h2}>{title}</h2>
            <div className={styles.wrapper}>
                {
                    product && product.map(({id,title,description,images,price}) => {
                        return (
                            <>
                                <Card  id={id}  title={title} description={description} images={images} price={price}/>
                            </>
                        )
                    })
                }
            </div>
            <div className={styles.btn}>
                <Button onClick={() => dispatch(plusProduct(4))} className={'btnTrend'} children={'See more'} type={'button'} isLoading={true}/>
            </div>
        </section>
    );
};

