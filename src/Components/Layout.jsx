import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="glass min-h-screen flex">
      <div className="flex sticky left-0 top-0 h-screen">
        <Sidebar />
        <Profile />
      </div>
      <div className="resize">
        <div className="flex flex-col">
          <div className="w-screen sticky top-0">
            <Navbar />
          </div>
          <main className="p-8 lg:p-24 lg:pt-12">{children}</main>
        </div>
      </div>
    </div>
  );
}
