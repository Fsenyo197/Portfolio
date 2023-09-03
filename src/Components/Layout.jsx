import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-true-gray-900 min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-10 flex-1">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}
