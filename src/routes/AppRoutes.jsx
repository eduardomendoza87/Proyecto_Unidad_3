import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Layout 
import MainLayout from '../Layouts/MainLayout';
//paginas
import Home from '../pages/Home';
import { Recursos } from '../pages/Resources';

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
            {/*Rutas hijas*/}
            <Route index element={<Home/>}/>
            <Route path='/recursos' element={<Recursos/>}/>
            </Route>
        </Routes>
        </BrowserRouter>

    );
};
export default AppRoutes;