import React, {useState} from 'react';
import styles from "./registeForm.module.sass"
import {useAppDispatch} from "../../../../shared/model";
import {openForm} from "../../../../entities/UserForm";
import {Register} from "../../../../features/authentication/Register";
import {Login} from "../../../../features/authentication/Login";
import Button from "../../../../shared/ui/Button/Button";
import {deleteUser} from "../../../../entities/UserForm/model/UserSlice";

export const RegisterForm = () => {
    const [showForm,setShowForm] = useState(false)
     const dispatch = useAppDispatch()
    return (
        <div onClick={() => dispatch(openForm(false))} className={styles.overlay}>
            <div onClick={(event) => event.stopPropagation() } className={styles.popUp}>
                <h2 className={styles.h2}>{showForm ? 'Sign Up' : 'Login'}</h2>
                <div onClick={() => dispatch(openForm(false))} className={styles.close}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.375 4.375L15.625 15.625" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.375 15.625L15.625 4.375" stroke="#576067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                {
                    showForm ?  <Register/> : <Login/>
                }

                <p onClick={() => setShowForm(!showForm)} className={styles.p}>{showForm ? 'I already have an account' : 'I do not have an account'}</p>
            </div>
            <Button onClick={() => dispatch(deleteUser())} children={'Выход'}  type={'button'} isLoading={true} className={'btnExit'}/>
        </div>
    );
};

