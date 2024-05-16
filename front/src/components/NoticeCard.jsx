import { Eye, Trash, View } from "lucide-react";
import React from "react";

const NoticeCard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 px-3 py-3 border-b-[1px] border-l-[1px] border-r-[1px] border-borderColor bg-white font-bangla">
        <div className="col-span-1">০১</div>
        <div className="col-span-5">নতুন ওয়েবসাইট তৈরী করুন</div>
        <div className="col-span-2">১০ মে, ২০২৪</div>
        <div className="col-span-2">০৫:৪৮</div>
        <div className="col-span-2 flex items-center justify-end gap-2">
          <button className="bg-red-500 text-white px-2 py-1 flex items-center gap-2 rounded-sm text-sm">
            <Trash className="w-4 h-4" />
            <span>ডিলিট</span>
          </button>

          <button className="bg-primaryColor text-white px-2 py-1 flex items-center gap-2 rounded-sm text-sm">
            <Eye className="w-4 h-4" />
            <span>দেখুন</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
