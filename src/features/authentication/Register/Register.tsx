import React from 'react';
import styles from "./register.module.sass"
import Button from "../../../shared/ui/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {openForm} from "../../../entities/UserForm";
import {useAppDispatch} from "../../../shared/model";
import {addUser} from "../../../entities/UserForm/model/UserSlice";
import {useNavigate} from "react-router-dom";
import {useRegUserMutation} from "../../../entities/UserForm/api/apiUser";


interface TypeData {
    "id": number,
    "email": string,
    "password": string,
    "name": string,
    "role": string,
    "avatar": string,
}
export const Register = () => {
    const  {register,handleSubmit} = useForm<TypeData>({mode:"onBlur"})
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [regUser] = useRegUserMutation()
    const onSubmit : SubmitHandler<TypeData> = (data) => {
        regUser(data)
        dispatch(addUser(data))
        dispatch(openForm(false))
        navigate('')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label className={styles.label} >
                <input  {...register("email")} className={styles.input} placeholder={'Your email'} type="email"/>
            </label>
            <label className={styles.label} >
                <input {...register("name")} className={styles.input} placeholder={'Your name'} type="text"/>
            </label>
            <label className={styles.label} >
                <input {...register("password")} className={styles.input} placeholder={'Your password'} type="password"/>
            </label>
            <label className={styles.label} >
                <input {...register("avatar")} className={styles.input} placeholder={'Your avatar'} type="text"/>
            </label>
            <Button children={'Create an account'} type={'submit'} isLoading={true} className={'formBtn'}/>
        </form>
    );
};
