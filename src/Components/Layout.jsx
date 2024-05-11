import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Layout({ children, isNavbarVisible }) {
  return (
    <div className="glass min-h-screen flex">
      <div className="flex sticky left-0 top-0 h-screen">
        <Sidebar />
        <Profile />
      </div>
      <div className="resize">
        <div className="flex flex-col">
          <div className={`w-screen sticky top-0}>
            <Navbar isNavbarVisible={isNavbarVisible} />
          </div>
          <main className={`p-8 lg:p-24 ${isNavbarVisible ? 'fixed top-0 left-0 right-0' : ''}`}>{children}</main>
        </div>
      </div>
    </div>
  );
}
