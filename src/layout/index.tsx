import "./sidebar.css";
import logo from "../assets/logo.svg";
import avater05 from "../assets/avatar-5.jpg";
import {
  Contact2,
  GroupIcon,
  MessageCircle,
  Moon,
  Settings2,
  Sun,
  User2,
} from "lucide-react";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <div className="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white dark:bg-zinc-600 ">
        <div className="hidden lg:my-5 lg:block">
          <a href="#" className="block dark:hidden">
            <span>
              <img src={logo} alt="" className="h-[30px]" />
            </span>
          </a>

          <a href="#" className="hidden dark:block">
            <span>
              <img src={logo} alt="" className="h-[30px]" />
            </span>
          </a>
        </div>

        <div className="w-full mx-auto lg:my-auto">
          <ul
            id="tabs"
            className="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs"
          >
            <li className="flex-grow lg:flex-grow-0">
              <a
                id="default-tab"
                href="#first"
                className="tab-button flex relative items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex ">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Profile
                  </span>
                </div>

                <User2 />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#second"
                className="tab-button active relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 left-0 group-hover/tab:flex">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Chats
                  </span>
                </div>

                <MessageCircle />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#third"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 left-0 group-hover/tab:flex">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Groups
                  </span>
                </div>

                <GroupIcon />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#fourth"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 left-0 group-hover/tab:flex">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Contacts
                  </span>
                </div>

                <Contact2 />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#fifth"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Settings
                  </span>
                </div>

                <Settings2 />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-20 my-5 lg:w-auto">
          <ul className="lg:block">
            <li className="hidden text-center light-dark-mode nav-item lg:block">
              <a href="#" className="hidden dark:block dark:text-violet-100/80">
                <Sun />
              </a>
              <a href="#" className="block text-gray-500 dark:hidden">
                <Moon />
              </a>
            </li>

            <li className="relative lg:mt-4 dropdown lg:dropup">
              <a
                href="#"
                className="dropdown-toggle"
                id="dropdownButton2"
                data-bs-toggle="dropdown"
              >
                <img
                  src={avater05}
                  alt=""
                  className="w-10 h-10 p-1 mx-auto rounded-full bg-gray-50 dark:bg-zinc-700"
                />
              </a>

              <ul
                className="absolute z-40 hidden float-left w-40 py-2 mx-4 mb-12 text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu bg-clip-padding dark:bg-zinc-700"
                aria-labelledby="dropdownButton2"
              >
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 text-left"
                    href="#"
                  >
                    Profile{" "}
                    <i className="text-gray-500  float-right ri-profile-line text-16"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 text-left"
                    href="#"
                  >
                    Setting{" "}
                    <i className="text-gray-500 float-right ri-settings-3-line text-16"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 text-left "
                    href="https://themesbrand.com/chatvia-tailwind/layouts/auth-lock-screen.html"
                  >
                    Lock Screen{" "}
                    <i className="text-gray-500 float-right ri-git-repository-private-line text-16"></i>
                  </a>
                </li>
                <li className="my-2 border-b border-gray-100/20"></li>
                <li>
                  <a
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-600/50 text-left"
                    href="https://themesbrand.com/chatvia-tailwind/layouts/auth-login.html"
                  >
                    Log out{" "}
                    <i className="text-gray-500 float-right ri-logout-circle-r-line text-16"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-leftsidebar lg:w-[380px] group-data-[theme-color=violet]:bg-slate-50 group-data-[theme-color=green]:bg-green-50/20 group-data-[theme-color=red]:bg-red-50/20 shadow overflow-y-hidden mb-[80px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700">
      {children}
      </div>
    </>
  );
};

export default Layout;
