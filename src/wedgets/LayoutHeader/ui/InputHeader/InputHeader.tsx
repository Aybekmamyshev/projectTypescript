import React, {useState} from 'react';
import Input from "../../../../shared/ui/input/input";
import styles from "./input.module.sass"
import {useFindProductsQuery} from "../../../../entities/cardTrend/api/ProductsApi";
import {Link} from "react-router-dom";

interface TypeElements {
    title: string,
    images: string,
    id: number
}

export const InputHeader = () => {
    const [search, setSearch] = useState('')


    const {data, isLoading} = useFindProductsQuery({title: search})
    console.log(data)
    const handleSearch = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(value)
    }
    return (
        <>
            <div className={styles.wrapper}>
                <label className={styles.label}>
            <span className={styles.loop}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                    d="M12.8416 12.0758L9.60783 8.84204C10.4886 7.76481 10.9216 6.39027 10.8173 5.00273C10.7131 3.61519 10.0795 2.3208 9.04763 1.3873C8.01577 0.453803 6.66459 -0.0473866 5.27357 -0.0126007C3.88255 0.0221852 2.55811 0.590285 1.57421 1.57419C0.5903 2.5581 0.0222005 3.88254 -0.0125854 5.27356C-0.0473713 6.66458 0.453818 8.01576 1.38732 9.04761C2.32081 10.0795 3.6152 10.7131 5.00274 10.8173C6.39029 10.9216 7.76483 10.4886 8.84205 9.60782L12.0758 12.8416C12.1791 12.9339 12.3139 12.9832 12.4524 12.9793C12.5909 12.9754 12.7227 12.9186 12.8207 12.8207C12.9187 12.7227 12.9754 12.5909 12.9793 12.4524C12.9832 12.3139 12.9339 12.1791 12.8416 12.0758ZM5.41737 9.75001C4.55987 9.75041 3.72153 9.49647 3.00838 9.02033C2.29523 8.54418 1.73933 7.86721 1.411 7.07507C1.08266 6.28293 0.996649 5.4112 1.16384 4.57016C1.33103 3.72913 1.74391 2.95657 2.35025 2.35023C2.95659 1.74389 3.72914 1.33101 4.57018 1.16382C5.41121 0.996633 6.28294 1.08265 7.07509 1.41098C7.86723 1.73931 8.5442 2.29522 9.02034 3.00836C9.49649 3.72151 9.75042 4.55986 9.75002 5.41735C9.74841 6.56595 9.29142 7.66704 8.47924 8.47922C7.66705 9.2914 6.56596 9.74839 5.41737 9.75001Z"
                    fill="#576067"/></svg>
            </span>
                    <Input onChange={handleSearch} value={search} setValue={setSearch}
                           placeHolder={"Search for anything..."} className={"input"}/>

                    <span onClick={() => setSearch('')} className={styles.close}>
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="white"
                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_103_289)">
                                                        <path
                                                            d="M5.65572 6.383C5.75272 6.4805 5.88022 6.529 6.00772 6.529C6.13522 6.529 6.26272 6.4805 6.35972 6.383C6.55422 6.1885 6.55422 5.873 6.35972 5.6785L2.37722 1.692C2.18272 1.4975 1.86772 1.4975 1.67322 1.692C1.47872 1.8865 1.47872 2.202 1.67322 2.3965L5.65572 6.383Z"
                                                            fill="" fillOpacity="0.5"/>
                                                        <path
                                                            d="M8.70342 8.024L14.3259 2.3965C14.5204 2.202 14.5204 1.8865 14.3259 1.692C14.1314 1.4975 13.8164 1.4115 13.6219 1.6065L7.64792 7.5H7.49992V7.6725L1.59992 13.6515C1.40542 13.846 1.44242 14.1615 1.63642 14.356C1.73342 14.4535 1.87942 14.502 2.00692 14.502C2.13442 14.502 2.27092 14.4535 2.36792 14.356L7.99492 8.729L13.6194 14.3565C13.7164 14.454 13.8454 14.5025 13.9724 14.5025C14.0994 14.5025 14.2279 14.454 14.3249 14.3565C14.5194 14.162 14.5199 13.8465 14.3254 13.652L8.70342 8.024Z"
                                                            fill="" fillOpacity="0.5"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_103_289">
                                                            <rect width="16" height="16" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                    </span>

                </label>
                {
                    search &&
                    <div className={styles.box}>
                        {isLoading ? "Loading..." : !data.length ?
                            <p style={{color: "white", textAlign: "center"}}>No result</p> : (
                                data.map(({title, images, id}: TypeElements) => {
                                    return (
                                        <Link onClick={() => setSearch('')} key={id} className={styles.block}
                                              to={`/products/${id}`}>
                                            <div className={styles.image}>
                                                <img src={images[0]} alt=""/>
                                            </div>
                                            <h2 className={styles.h2}>{title}</h2>
                                        </Link>
                                    )
                                })
                            )}
                    </div>
                }
            </div>

        </>
    );
};
