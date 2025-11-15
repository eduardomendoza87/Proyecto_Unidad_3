import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Layout 
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
            {/*Rutas hijas*/}
            <Route index element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>

    );
};
export default AppRoutes;