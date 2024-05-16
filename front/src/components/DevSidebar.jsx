import React from "react";
import {
  Bell,
  CalendarFold,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  Presentation,
  ScrollText,
  Settings,
  Tags,
  User,
  UserPlus,
  UserRoundCog,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";
import SideLink from "./SideLink";

const DevSidebar = () => {
  return (
    <>
      <div className="__sidebar bg-darkBg text-white h-screen w-full pt-12">
        {/* pathsala logo */}

        <img src="/logo.png" alt="Logo" className="w-[150px] h-auto px-5" />

        <div className="flex flex-col items-start justify-start mt-6">
          <SideLink
            text="Overview"
            link="/admin/dashboard"
            coreLink="/admin/dashboard"
            classProp="active-link font-english"
            icon={<LayoutDashboard className="w-5 h-5" />}
          />

          <SideLink
            text="Users"
            link="/admin/students?page=1"
            coreLink="/admin/students"
            classProp="font-english"
            icon={<User className="w-5 h-5" />}
          />
          <SideLink
            text="Schools"
            link="/admin/teachers?page=1"
            coreLink="/admin/teachers"
            classProp="font-english"
            icon={<Landmark className="w-5 h-5" />}
          />

          <SideLink
            text="Payments"
            link="/admin/accounting/dashboard"
            coreLink="/admin/accounting/dashboard"
            classProp="font-english"
            icon={<Wallet className="w-5 h-5" />}
          />

          <SideLink
            text="Settings"
            link="/admin/settings"
            coreLink="/admin/settings"
            classProp="font-english"
            icon={<Settings className="w-5 h-5" />}
          />

          <SideLink
            text="Support Tickets"
            link="/admin/supports"
            coreLink="/admin/supports"
            classProp="font-english"
            icon={<Tags className="w-5 h-5" />}
          />
        </div>
      </div>
    </>
  );
};

export default DevSidebar;
