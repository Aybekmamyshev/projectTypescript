import React, {useEffect} from 'react';
import styles from "./productPage.module.sass"
import {useGetSingleQuery} from "../../entities/AboutProduct";
import {useNavigate, useParams} from "react-router-dom";
import ProductCard from "./ui/ProductCard/ProductCard";



export const ProductPage = () => {
    const params = useParams()
   const navigate = useNavigate()
    const {data,isLoading,isSuccess,isFetching} = useGetSingleQuery(params.id)
    console.log(data)
    useEffect(() => {
        if (!isLoading && !isSuccess && !isFetching) {
            navigate('/')
        }

    }, [isFetching, isSuccess, isLoading])
    return (

        <div>
            <ProductCard {...data!}/>
        </div>
    );
};

