import React from "react";
import { Outlet}  from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
    return(
        <div className="main-layout min-h-screen w-full font-sans">
            <ScrollToTop/>
            <Navbar/>
            <main className="content">
                <Outlet/>
            </main>
            <Footer/>
        </div>

    );
};
export default MainLayout;
