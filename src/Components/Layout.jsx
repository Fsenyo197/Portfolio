import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="bg-true-gray-900 min-h-screen flex">
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
}
