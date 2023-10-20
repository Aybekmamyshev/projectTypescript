
import styles from "./productCard.module.sass"
import Button from "../../../../shared/ui/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../../shared/model";
import {addItemToCart} from "../../../../entities/AboutProduct/model/slice";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface TypeData {
    id: number
    title: string
    price: number
    description: string
    count? : number
    category: {
        id: number,
        name : string,
        image : string
    };
    images: string[];
}

// interface  TypeSize {
//     activeSize : number | undefined,
//     setActiveSize : Dispatch<SetStateAction<number | undefined>>
// }

const ProductCard = (data : TypeData) => {
     const dispatch = useAppDispatch()
    const [currentImage,setCurrentImage] = useState<string>()
    const {title,description,price,images} = data
    const  sizes = ['4.5','5','5.6']
    const {cart} = useAppSelector((store) => store.cart)
    const [activeSize ,setActiveSize] = useState<string>()
    const findCart = cart.some((item) => item.id === data.id)
    console.log(data)

    useEffect(() => {
        if (!images?.length) return
            setCurrentImage(images[0])
    },[images])


    return (
        <div className={`container ${styles.wrapper}`}>
            <div className={styles.leftBlock}>
                <div className={styles.bigImg}>
                    <img src={currentImage} alt=""/>
                </div>
                <div className={styles.vertical}>
                    {
                        images?.map((item) => (
                            <div onClick={() => setCurrentImage(item)}  className={styles.img}>
                                <img src={item} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.rigth}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.price}>{price}$</p>
                <div className={styles.color}>
                    <h3 className={styles.h3}>Color:</h3>
                    <h4 className={styles.h4}>Blanc</h4>
                </div>
                <div className={styles.sizes}>
                    <h5 className={styles.h5}>Sizes:</h5>
                    <div className={styles.wrapp}>
                        {
                            sizes.map((size, i) => (
                                <span onClick={() => setActiveSize(size)} className={`${activeSize === size ? styles.num : styles.static}`}>{size}</span>
                            ))
                        }
                    </div>
                </div>
                <p className={styles.p}>{description}</p>
                <div className={styles.click}>

                    <Button style={{background : `${findCart ?  'green' : ""}`}}  disabled={!activeSize}  onClick={() => dispatch(addItemToCart(data))}  children={  findCart ? 'Added' : 'Add to cart'} type={'button'} isLoading={true} className={`${activeSize ? 'cartBtn' : 'dark'}`}/>
                    <Button disabled={false} children={'Add to favorites'} type={'button'} isLoading={true} className={'addFav'}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;