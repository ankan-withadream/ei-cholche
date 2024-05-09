import "./sidebar.css";
import logo from "../assets/logo.svg";
import avater05 from "../assets/avatar-5.jpg";
import {
  Contact2,
  GroupIcon,
  MessageCircle,
  Settings2,
  User2,
} from "lucide-react";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <div className="sidebar-menu w-full lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white">
        <div className="hidden lg:my-5 lg:block">
          <a href="#" className="block">
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
                href="/profile"
                className="tab-button flex relative items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 left-0 group-hover/tab:flex ">
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
                href="/chats"
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
                href="/contacts"
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
                <div className="absolute items-center hidden -top-10 left-0 group-hover/tab:flex">
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
                  className="w-10 h-10 p-1 mx-auto rounded-full bg-gray-50"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-leftsidebar lg:w-[380px]    shadow overflow-y-hidden mb-[80px] lg:mb-0">
      {children}
      </div>
    </>
  );
};

export default Layout;
