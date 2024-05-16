import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideLink = ({ icon, text, link, coreLink, classProp, pop }) => {
  const path = useLocation();

  return (
    <>
      <Link
        to={link}
        className={`client-sidebar-links ${
          path.pathname === coreLink && "active-link"
        } ${classProp}`}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <span>{text}</span>
          </div>
          {pop && (
            <div className="bg-white w-5 h-5 flex items-center justify-center rounded-full text-[#292929] text-[13px] font-english">
              {pop}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default SideLink;
