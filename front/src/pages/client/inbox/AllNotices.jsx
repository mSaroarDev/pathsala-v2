import React from "react";
import NoticeCard from "../../../components/NoticeCard";
import ClientDashboardLayout from "../../../layouts/ClientDashboardLayout";
import { Link } from "react-router-dom";

const Inbox = () => {
  return (
    <>
      <ClientDashboardLayout>
        {/* page title start */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-bold text-[22px] font-bangla">
            গুরুত্বপুর্ন মেসেজ (পাঠশালা টিম থেকে)
          </h2>
        </div>

        <div className="mt-5">
          {/* table heading */}
          <div className="grid grid-cols-12 gap-5 px-3 py-2 border-[1px] border-borderColor bg-lightBg font-bangla">
            <div className="font-semibold col-span-1">ক্রমিক</div>
            <div className="font-semibold col-span-5">টাইটেল</div>
            <div className="font-semibold col-span-2">তারিখ</div>
            <div className="font-semibold col-span-2">সময়</div>
            <div className="font-semibold col-span-2 flex items-center justify-end">
              পদক্ষেপ
            </div>
          </div>

          {/* map data here */}
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          {/* map data here */}
        </div>
        {/* page title end */}
      </ClientDashboardLayout>
    </>
  );
};

export default Inbox;
