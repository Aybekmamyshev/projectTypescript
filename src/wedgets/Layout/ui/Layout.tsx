import React from 'react';
import {LayoutHeader} from "../../LayoutHeader";
import {LayoutFooter} from "../../LayoutFooter";
import {Outlet} from "react-router-dom";
import {RegisterForm} from "../../../pages/UserForm";
import {useAppSelector} from "../../../shared/model";

 export const Layout = () => {
     const {showFile} = useAppSelector((store) => store.user)
    return (
        <div>
            <LayoutHeader/>
            {
                showFile ? <RegisterForm/> : ""
            }
            <main>
                <Outlet/>
            </main>
            <LayoutFooter/>
        </div>
    );
};

