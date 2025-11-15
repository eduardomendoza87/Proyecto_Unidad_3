import React from "react";
import { Outlet}  from "react-router-dom";

const MainLayout = () => {
    return(
        <div className="main-layout min-h-screen w-full font-sans">
            <main className="content">
                <Outlet/>
            </main>
        </div>

    );
};
export default MainLayout;
