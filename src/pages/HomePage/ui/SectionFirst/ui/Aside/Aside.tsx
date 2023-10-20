import React from 'react';
import styles from "./aside.module.sass"
import {NavLink} from "react-router-dom";
import {useGetCategoriesQuery} from "../../../../../../entities/category/api/CategoryApi";
import LoadingComponent from "../../../../../../shared/ui/LoadingComponent/LaodingComponent";
const Aside = () => {
    const {data : list,isLoading} = useGetCategoriesQuery()
    return (
        <aside className={`container ${styles.aside}`}>
            <h2 className={styles.h2}>CATEGORIES</h2>
            <nav>
                <ul className={styles.list}>

                    {
                      isLoading ? <LoadingComponent/>  :  list && list.map(({id,name}) => (
                            <li key={id}>
                                <NavLink  className={({isActive}) =>  `${styles.link}  ${isActive ? styles.active :  ""}` } to={`/categories/${id}`}>{name}</NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            <div className={styles.block}>
                <a className={styles.link} href="/help">Help</a>
                <a className={styles.link} href="/termin">Terms & Conditions</a>
            </div>
        </aside>
    );
};

export default Aside;