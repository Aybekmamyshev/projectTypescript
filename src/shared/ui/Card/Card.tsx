import React from 'react';
import styles from "./card.module.sass";
import {Link} from "react-router-dom";

interface TypeProps {
    id: number
    images: string[],
    title : string,
    description : string,
    price : number
}
const Card = ({images,title,description,price,id} : TypeProps) => {
    return (
        <Link to={`/products/${id}`} className={styles.card}>
            <div className={styles.picture}>
                <img src={images[0]} className={styles.img} alt=''/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.h2}>{title}</h2>
                <h3 className={styles.h3}>{description.slice(0,50)}</h3>
                <div className={styles.last}>
                    <div className={styles.left}>
                        <p className={styles.new}>{Math.floor(price + 0.8)}$</p>
                        <p className={styles.old}>{Math.floor( Math.random()  * 20 + 1)}$</p>
                    </div>
                    <p className={styles.text}>19 people purchased</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;