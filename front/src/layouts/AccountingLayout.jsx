import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import AccountingSidebar from "../components/AccountingSidebar";

const ClientAccountingLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3 lg:col-span-2">
          <AccountingSidebar />
        </div>
        <div className="col-span-9 lg:col-span-10 p-7 mt-7">{children}</div>
      </div>
    </>
  );
};

export default ClientAccountingLayout;
