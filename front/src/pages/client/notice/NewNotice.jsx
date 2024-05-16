import { Eye, Key, Rss, User } from "lucide-react";
import React from "react";
import ClientDashboardLayout from "../../../layouts/ClientDashboardLayout";

const NewNotice = () => {
  return (
    <>
      <ClientDashboardLayout>
        <form className="grid grid-cols-12 gap-5 p-5">
          <h2 className="font-bold text-[19px] font-bangla col-span-12">
            নতুন নোটিশ তৈরী করুন
          </h2>
          {/* -------------- left side start  ------------- */}
          <div className="col-span-12 lg:col-span-9">
            <div className="form-design">
              {/* <label htmlFor="notice-title">বিষয়</label> */}
              <input type="text" placeholder="নোটিশ টাইটেল" />
              <label htmlFor="notice-title">বিস্তারিত</label>
              <textarea cols="30" rows="10"></textarea>
            </div>
          </div>
          {/* --------------- left side end ------------- */}

          {/* ---------- right side -------------- */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white w-full border-[1px] border-borderColor">
              <div className="w-full bg-lightBg px-3 py-2 font-bold font-bangla border-b-[1px] border-borderColor">
                পদক্ষেপ
              </div>
              <div className="bg-white px-3 py-2 flex flex-col gap-3 font-english">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Creating By: Username</span>
                </p>
                <p className="flex items-center gap-2">
                  <Rss className="w-4 h-4" />
                  <span>Publishing: Now</span>
                </p>
                <p className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Visibility: Public</span>
                </p>

                <div className="border-t-[1px] border-borderColor flex items-center justify-end mt-2">
                  <button type="submit" className="button-primary font-bangla">
                    সাবমিট নোটিশ
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------------- right side end ---------------- */}
        </form>
      </ClientDashboardLayout>
    </>
  );
};

export default NewNotice;
