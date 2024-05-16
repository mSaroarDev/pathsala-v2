import React from "react";
import {
  Bell,
  CalendarFold,
  GraduationCap,
  LayoutDashboard,
  MessageSquareMore,
  Presentation,
  ScrollText,
  Settings,
  Tags,
  UserPlus,
  UserRoundCog,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";
import SideLink from "./SideLink";

const ClientSidebar = () => {
  const newMessage = true;
  const messageCount = 5;

  return (
    <>
      <div className="__sidebar bg-darkBg text-white h-screen w-full pt-12">
        {/* pathsala logo */}

        <img src="/logo.png" alt="Logo" className="w-[150px] h-auto px-5" />

        <div className="flex flex-col items-start justify-start mt-6">
          <SideLink
            text="ড্যাশবোর্ড"
            link="/client/dashboard"
            coreLink="/client/dashboard"
            classProp="font-[17px] font-bangla"
            icon={<LayoutDashboard className="w-5 h-5" />}
          />
          <SideLink
            text="ইনবক্স"
            link="/client/inbox"
            coreLink="/client/inbox"
            classProp="font-[17px] font-bangla"
            icon={<MessageSquareMore className="w-5 h-5" />}
            pop={newMessage && messageCount}
          />
          <SideLink
            text="নোটিশ সমূহ"
            link="/client/notices?page=1"
            coreLink="/client/notices"
            classProp="font-[17px] font-bangla"
            icon={<Bell className="w-5 h-5" />}
          />
          <SideLink
            text="ইভেন্ট সমূহ"
            link="/client/events?page=1"
            coreLink="/client/events"
            classProp="font-[17px] font-bangla"
            icon={<CalendarFold className="w-5 h-5" />}
          />
          <SideLink
            text="শ্রেনীসমূহ"
            link="/client/classes?page=1"
            coreLink="/client/classes"
            classProp="font-[17px] font-bangla"
            icon={<Presentation className="w-5 h-5" />}
          />
          <SideLink
            text="শিক্ষার্থী"
            link="/client/students?page=1"
            coreLink="/client/students"
            classProp="font-[17px] font-bangla"
            icon={<GraduationCap className="w-5 h-5" />}
          />
          <SideLink
            text="শিক্ষক"
            link="/client/teachers?page=1"
            coreLink="/client/teachers"
            classProp="font-[17px] font-bangla"
            icon={<Users className="w-5 h-5" />}
          />
          <SideLink
            text="অফিস স্টাফ"
            link="/client/staffs?page=1"
            coreLink="/client/staffs"
            classProp="font-[17px] font-bangla"
            icon={<UsersRound className="w-5 h-5" />}
          />
          <SideLink
            text="ম্যানেজিং কমিটি"
            link="/client/committee?page=1"
            coreLink="/client/committee"
            classProp="font-[17px] font-bangla"
            icon={<UserRoundCog className="w-5 h-5" />}
          />
          <SideLink
            text="অ্যাডমিশন"
            link="/client/admission"
            coreLink="/client/admission"
            classProp="font-[17px] font-bangla"
            icon={<UserPlus className="w-5 h-5" />}
          />
          <SideLink
            text="অ্যাকউন্টিং"
            link="/client/accounting/dashboard"
            coreLink="/client/accounting/dashboard"
            classProp="font-[17px] font-bangla"
            icon={<Wallet className="w-5 h-5" />}
          />
          <SideLink
            text="সমাপনী ফলাফল"
            link="/client/results"
            coreLink="/client/results"
            classProp="font-[17px] font-bangla"
            icon={<ScrollText className="w-5 h-5" />}
          />

          <SideLink
            text="সেটিংস"
            link="/client/settings"
            coreLink="/client/settings"
            classProp="font-[17px] font-bangla"
            icon={<Settings className="w-5 h-5" />}
          />

          <SideLink
            text="সাপোর্ট"
            link="/client/supports"
            coreLink="/client/supports"
            classProp="font-[17px] font-bangla"
            icon={<Tags className="w-5 h-5" />}
          />
        </div>
      </div>
    </>
  );
};

export default ClientSidebar;
