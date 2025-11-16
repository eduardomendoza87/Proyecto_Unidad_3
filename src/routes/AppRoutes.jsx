import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Layout 
import MainLayout from '../Layouts/MainLayout';
//paginas
import Home from '../pages/Home';
import { Recursos } from '../pages/Resources';
import Glosario from '../pages/subPages/glossary';
import Creditos from '../pages/Credits';

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
            {/*Rutas hijas*/}
            <Route index element={<Home/>}/>
            <Route path='/recursos' element={<Recursos/>}/>
            <Route path='/subPages/glosario' element={<Glosario/>}/>
            <Route path='/creditos' element={<Creditos/>}/>
            </Route>
        </Routes>
        </BrowserRouter>

    );
};
export default AppRoutes;