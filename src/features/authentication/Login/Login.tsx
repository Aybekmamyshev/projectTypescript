import React from 'react';
import styles from "../Register/register.module.sass";
import Button from "../../../shared/ui/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useLoginUserMutation} from "../../../entities/UserForm/api/apiUser";
import {openForm} from "../../../entities/UserForm";
import {useAppDispatch} from "../../../shared/model";
import {addUser} from "../../../entities/UserForm/model/UserSlice";

interface TypeLogin {
    email: string,
    password: string
}

export const Login = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm<TypeLogin>({mode: "onBlur"})
    const [logInUser] = useLoginUserMutation()
    const navigate = useNavigate()
    const handleSubmitLogin: SubmitHandler<TypeLogin> = async (data) => {
        try {
            await logInUser(data)
            navigate('/')
            dispatch(addUser(data))
            dispatch(openForm(false))
        }catch (e : any){
            alert(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitLogin)} className={styles.form}>
            <label className={styles.label}>
                <input {...register('email')} className={styles.input} placeholder={'Your email'} type="text"/>
            </label>
            <label className={styles.label}>
                <input {...register('password')} className={styles.input} placeholder={'Your password'}
                       type="password"/>
            </label>
            <Button children={'Log in'} type={'submit'} isLoading={true} className={'formBtn'}/>
        </form>
    );
};

