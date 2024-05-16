import { Home, LogOut, MailOpen, X } from "lucide-react";
import { useState } from "react";

const DevDashboardNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 z-50 py-1 px-5 bg-darkBg text-white">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-english font-semibold text-[16px] flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Homepage</span>
          </a>

          <div className="flex items-center gap-2 relative">
            <h2 className="font-english text-[17px]">
              Saroar Jahan, Developer, UniSoft Informatix
            </h2>
            <button onMouseEnter={() => setShowMenu(true)}>
              <img src="/avatar.png" className="rounded-full w-[20px]" alt="" />
            </button>

            {showMenu ? (
              <div className="absolute h-auto w-auto top-[40px] right-[10px] bg-white border-[1px] border-borderColor rounded-md font-english py-2">
                <ul className="text-black relative">
                  <button
                    onClick={() => setShowMenu(false)}
                    className="absolute -top-4 -right-2 h-auto w-auto bg-red-500 rounded-full p-1"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  <li className="navbar-hover font-bold text-[17px]">
                    <span>Saroar Jahan</span>
                  </li>
                  <li className="navbar-hover flex items-center gap-2">
                    <MailOpen className="w-4 h-4" />
                    <span>saroar.dev@gmail.com</span>
                  </li>
                  <li className="navbar-hover">
                    <button href="#" className="flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevDashboardNavbar;
