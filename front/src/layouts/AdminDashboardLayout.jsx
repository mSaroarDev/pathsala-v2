import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import ClientSidebar from "../components/ClientSidebar";
import DevSidebar from "../components/DevSidebar";

const AdminDashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3 lg:col-span-2">
          <DevSidebar />
        </div>
        <div className="col-span-9 lg:col-span-10 p-7 mt-7">{children}</div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
