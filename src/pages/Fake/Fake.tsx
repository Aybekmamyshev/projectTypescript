import React from 'react';
import {useGetItemsQuery} from "./apiFake";

const Fake = () => {
    const {data} = useGetItemsQuery()

    console.log(data)
    return (
        <div className='container'>
            {
                data?.map((item) => (
                    <div>{item.title}</div>
                ))
            }
        </div>
    );
};

export default Fake;