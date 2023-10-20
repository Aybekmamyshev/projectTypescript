import React, {useEffect, useState} from 'react';
import styles from "./userLogo.module.sass"
import {openForm} from "../../../../entities/UserForm";
import {useAppDispatch, useAppSelector} from "../../../../shared/model";
import logo from "./Vector (1).svg"
const UserLogo = () => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector((store) => store.user)
    const [value,setValue] = useState({
        name : "Guest",
        avatar : logo
    })

    useEffect(() => {
        if (!user?.email) return;
        setValue(user!)
    },[user])
    return (
        <div onClick={() => dispatch(openForm(true))} className={styles.user} >
            <div className={styles.img}>
                <img className={styles.photo} src={value.avatar} alt="user"/>
            </div>
            <h2 className={styles.title}>{value.name}</h2>
        </div>
    );
};

export default UserLogo;