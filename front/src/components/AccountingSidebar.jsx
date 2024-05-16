import React from "react";
import {
  ArrowLeft,
  Bell,
  CalendarFold,
  GraduationCap,
  Home,
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

const AccountingSidebar = () => {
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
            link="/client/accounting/dashboard"
            coreLink="/client/accounting/accounting/dashboard"
            classProp="font-[17px] font-bangla"
            icon={<LayoutDashboard className="w-5 h-5" />}
          />
          <SideLink
            text="শিক্ষার্থী ফি"
            link="/client/accounting/student-fee"
            coreLink="/client/accounting/student-fee"
            classProp="font-[17px] font-bangla"
            icon={<MessageSquareMore className="w-5 h-5" />}
          />
          <SideLink
            text="শিক্ষক বেতন"
            link="/client/accounting/teachers-salary"
            coreLink="/client/accounting/teachers-salary"
            classProp="font-[17px] font-bangla"
            icon={<Bell className="w-5 h-5" />}
          />
          <SideLink
            text="প্রতিষ্ঠানের আয়"
            link="/client/accounting/income"
            coreLink="/client/accounting/income"
            classProp="font-[17px] font-bangla"
            icon={<CalendarFold className="w-5 h-5" />}
          />
          <SideLink
            text="প্রতিষ্ঠানের ব্যায়"
            link="/client/accounting/expense"
            coreLink="/client/accounting/expense"
            classProp="font-[17px] font-bangla grow"
            icon={<Presentation className="w-5 h-5" />}
          />

          <SideLink
            text="মুল ড্যাশবোর্ড"
            link="/client/dashboard"
            coreLink="/client/dashboard"
            classProp="font-[17px] font-bangla mt-20"
            icon={<Home className="w-5 h-5" />}
          />
        </div>
      </div>
    </>
  );
};

export default AccountingSidebar;
