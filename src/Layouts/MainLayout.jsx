import React from "react";
import { Outlet}  from "react-router-dom";
import { Navbar } from "../components/Navbar";

const MainLayout = () => {
    return(
        <div className="main-layout min-h-screen w-full font-sans">
            <Navbar/>
            <main className="content">
                <Outlet/>
            </main>
        </div>

    );
};
export default MainLayout;
