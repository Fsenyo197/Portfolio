import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex">
      <div className="sticky left-0 top-0 h-screen flex">
        <Sidebar />
        <Profile />
      </div>
      <div className="flex flex-col">
        <Navbar />
        <main className=" p-8 md:p-24 text-sm">{children}</main>
      </div>
    </div>
  );
}
