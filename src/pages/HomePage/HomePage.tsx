import React from 'react';
import {SectionFirst} from "./ui/SectionFirst";
import {SectionTrend} from "./ui/SectionTrend";
import {SectionWorth} from "./ui/SectionWorth";
import {SectionBanner} from "./ui/SectionBanner/SectionBanner";
import {useGetProductQuery} from "../../entities/cardTrend";


export const HomePage = () => {
    const  {data = []} = useGetProductQuery()
    const filtered = data!.filter(({price}) => price < 100 )
    return (
        <div className={'container'}>
            <SectionFirst/>
            <SectionTrend title={'Trending'} list={data}/>
            <SectionWorth/>
            <SectionBanner/>
            <SectionTrend title={'Less than 100$'} list={filtered}/>
        </div>
    );
};