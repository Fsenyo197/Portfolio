import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex">
      <div className="fixed top-0 left-0 h-full flex">
        <Sidebar />
        <Profile />
      </div>
      <div className="flex flex-col flex-1">
        {/* Added left margin to accommodate the sidebar width */}
        <Navbar />
        <main className="flex-grow p-8">{children}</main>
      </div>
    </div>
  );
}
