import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../Header";

const RequireAuth = () => {
    const [toggleSidebar, setToggleSidebar] = useState(true);

    const handleSidebarToggle = () => setToggleSidebar(!toggleSidebar);

    return (
        <section className='main flex'>
            <div className={`sidebar-wrapper sticky top-0 h-screen transition-all overflow-hidden ${toggleSidebar ? 'w-[20%]' : 'w-[0%] opacity-0'}`}>
                <Sidebar />
            </div>
            <div className='content-main w-full flex flex-col transition-all'>
                <div className='content-header h-[60px] sticky top-0 z-10'>
                    <Header handleSidebarToggle={handleSidebarToggle} />
                </div>
                <div className='p-5 dark:bg-gray-900 h-full'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default RequireAuth;