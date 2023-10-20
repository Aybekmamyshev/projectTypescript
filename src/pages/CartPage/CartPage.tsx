import React from 'react';
import styles from "./cartPage.module.sass"
import Button from "../../shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../shared/model";
import {deleteCart, removeCount} from "../../entities/AboutProduct/model/slice";
import {addCount} from "../../entities/AboutProduct/model/slice";
import PageEmpty from "./PageEmpty/PageEmpty";

export const CartPage = () => {

    const dispatch = useAppDispatch()
    const {cart} = useAppSelector((store) => store.cart)
    return (
        <>
                    <div className={`container ${styles.content}`}>
                        <h2 className={styles.h2}>{!cart.length  ? "" :  "Your cart"}</h2>
                        <div className={styles.wrapper}>

                            {
                                 !cart.length ?  <PageEmpty/> : cart.map((item) => {
                                     const  {images,title,price,count} = item
                                     return (
                                             <div className={styles.row}>
                                                 <div className={styles.left}>
                                                     <div className={styles.img}>
                                                         <img src={images[0]} alt=""/>
                                                     </div>
                                                     <div className={styles.about}>
                                                         <h3 className={styles.h3}>{title}</h3>
                                                         <h4 className={styles.h4}>Sneakers</h4>
                                                     </div>
                                                 </div>
                                                 <div className={styles.center}>
                                                     <p className={styles.price}>{price}$</p>
                                                     <div className={styles.box}>
                                                         <button disabled={count === 0 && true} onClick={() => dispatch(removeCount(item))} className={styles.btn}>-</button>
                                                         <span className={styles.count}>{count}</span>
                                                         <button onClick={() => dispatch(addCount(item))} className={styles.btn}>+</button>
                                                     </div>
                                                 </div>
                                                 <div className={styles.right}>
                                                     <p className={styles.newPrice}>{price * count}$</p>
                                                     <div onClick={() => dispatch(deleteCart(item.id))} className={styles.svg}>
                                                         <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                             <g clipPath="url(#clip0_103_289)">
                                                                 <path d="M5.65572 6.383C5.75272 6.4805 5.88022 6.529 6.00772 6.529C6.13522 6.529 6.26272 6.4805 6.35972 6.383C6.55422 6.1885 6.55422 5.873 6.35972 5.6785L2.37722 1.692C2.18272 1.4975 1.86772 1.4975 1.67322 1.692C1.47872 1.8865 1.47872 2.202 1.67322 2.3965L5.65572 6.383Z" fill="" fillOpacity="0.5"/>
                                                                 <path d="M8.70342 8.024L14.3259 2.3965C14.5204 2.202 14.5204 1.8865 14.3259 1.692C14.1314 1.4975 13.8164 1.4115 13.6219 1.6065L7.64792 7.5H7.49992V7.6725L1.59992 13.6515C1.40542 13.846 1.44242 14.1615 1.63642 14.356C1.73342 14.4535 1.87942 14.502 2.00692 14.502C2.13442 14.502 2.27092 14.4535 2.36792 14.356L7.99492 8.729L13.6194 14.3565C13.7164 14.454 13.8454 14.5025 13.9724 14.5025C14.0994 14.5025 14.2279 14.454 14.3249 14.3565C14.5194 14.162 14.5199 13.8465 14.3254 13.652L8.70342 8.024Z" fill="" fillOpacity="0.5"/>
                                                             </g>
                                                             <defs>
                                                                 <clipPath id="clip0_103_289">
                                                                     <rect width="16" height="16" fill="white"/>
                                                                 </clipPath>
                                                             </defs>
                                                         </svg>

                                                     </div>
                                                 </div>
                                             </div>
                                     )

                                 })
                            }

                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.total}>
                                <h5 className={styles.h5}>TOTAL PRICE:</h5>
                                <h5 className={styles.h5}>
                                    {0}$
                                </h5>
                            </div>
                            <Button children={'Proceed to checkout'} type={'button'} isLoading={true} className={'basketBtn'}/>
                        </div>


                    </div>

        </>
    );
};
