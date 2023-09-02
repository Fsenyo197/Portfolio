import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
    return (
        <div className="bg-true-gray-900 min-h-screen flex">
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
}