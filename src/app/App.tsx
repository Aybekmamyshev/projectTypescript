import React from 'react';
import "./styles/global.sass"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import {HomePage} from "../pages/HomePage";
import {Layout} from "../wedgets/Layout";
import {CategoriesPage} from "../pages/CategoriesPage";
import {ProductPage} from "../pages/ProductPage";
import {CartPage} from "../pages/CartPage";
import Fake from "../pages/Fake/Fake";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'products/:id'} element={<ProductPage/>}/>
                <Route path={'cart'} element={<CartPage/>}/>
                <Route path={'fake'} element={<Fake />}/>
                {/*<Route path={'/categories/:id'} element={<CategoriesPage/>}/>*/}
            </Route>
        </>
    )
)

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
