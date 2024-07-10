import { Navbar } from "@/components/Dashboard";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <div className="flex flex-col w-full min-h-screen bg-muted/40">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
