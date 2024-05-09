import {
    ArrowLeft,
    File,
    GroupIcon,
    Search,
    SendHorizonalIcon
  } from "lucide-react";
  import avater01 from "../../assets/avatar-1.jpg";
  import avater04 from "../../assets/avatar-4.jpg";
  
  const ChatRoom = () => {
    return (
      <div className="w-full overflow-hidden transition-all duration-150 bg-white user-chat">
        <div className="lg:flex">
          <div className="relative w-full overflow-hidden ">
            {/* ---------------------- Chatbox Header ----------------------- */}
            <div className="p-4 border-b border-gray-100 lg:p-6">
              <div className="grid items-center grid-cols-12">
                <div className="col-span-8 sm:col-span-4">
                  <div className="flex items-center">
                    <div className="block mr-2 lg:hidden">
                      <a
                        href="#"
                        className="p-2 text-gray-500 user-chat-remove text-[16px]"
                      >
                        <ArrowLeft />
                      </a>
                    </div>
                    <div className="mr-3">
                      <img
                        src={avater04}
                        className="rounded-full h-9 w-9"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <h5 className="mb-0 truncate text-[16px] block">
                        <a href="#" className="text-gray-800 dark:text-gray-50">
                          Doris Brown
                        </a>{" "}
                        <i className="text-green-500 ml-1 ri-record-circle-fill text-[10px] "></i>
                      </h5>
                    </div>
                  </div>
                </div>
  
                <div className="col-span-4 sm:col-span-8">
                  <ul className="flex items-center justify-end lg:gap-4">
                    <li className="px-3">
                      <div className="relative dropstart">
                        <button
                          className="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButton10"
                          data-tw-auto-close="outside"
                        >
                          <Search />
                        </button>
                      </div>
                    </li>
  
                    <li className="px-3">
                      <a
                        href="#"
                        className="hidden text-gray-500 dark:text-gray-300 lg:block profileTab"
                      >
                        <GroupIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*----------------------  Chatbox Header Close ----------------*/}
  
            {/* --------------------- Chatbox ---------------------*/}
  
            <div className="h-[76vh] p-4 lg:p-6 m-2 ">
              <ul className="mb-0">
                <li className="clear-both py-4">
                  <div className="flex items-end gap-3">
                    <div>
                      <img
                        src={avater04}
                        alt=""
                        className="rounded-full h-9 w-9"
                      />
                    </div>
  
                    <div>
                      <div className="flex gap-2 mb-2">
                        <div className="relative px-5 py-3 text-white rounded-lg rounded-bl-none bg-violet-500">
                          <p className="mb-0">Good morning</p>
                          <p className="mt-1 mb-0 text-xs text-right text-white/50">
                            <span className="align-middle">  10:00</span>
                          </p>
                          <div className="absolute border-[5px] border-transparent border-l-violet-500 border-t-violet-500"></div>
                        </div>
                       
                      </div>
                      <div className="font-medium text-gray-700 text-[14px] dark:text-gray-300">
                        Doris Brown
                      </div>
                    </div>
                  </div>
                </li>
  
                <li className="clear-both py-4">
                  <div className="relative inline-flex items-end mb-6 text-right float-right">
                    <div className="order-3 mr-0 ml-4">
                      <img
                        src={avater01}
                        alt=""
                        className="rounded-full h-9 w-9"
                      />
                    </div>
  
                    <div>
                      <div className="flex gap-2 mb-2 justify-end ">
                        <div className="relative order-2 px-5 py-3 text-gray-700 rounded-lg rounded-br-none  bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                          <p className="mb-0">
                            Good morning, How are you? What about our next
                            meeting?
                          </p>
                          <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300">
                            
                            <span className="align-middle">10:02</span>
                          </p>
                          <div className="absolute border-[5px] border-transparent border-r-gray-50 border-t-gray-50  right-0 bottom-2 "></div>
                        </div>
  
                       
                      </div>
  
                      <div className="font-medium text-gray-700  text-[14px] dark:text-gray-300">
                        Patricia Smith
                      </div>
                    </div>
                  </div>
                </li>
  
                <li className="clear-both py-4">
                  <div className="relative mt-3 mb-6 text-center">
                    <div className="absolute w-full h-[1px] left-0 right-0 bg-gray-50 top-[10px]"></div>
                    <span className="relative bg-gray-50 text-[13px] py-[6px] px-3 rounded">
                      Today
                    </span>
                  </div>
                </li>
  
  
                <li className="clear-both py-4">
                  <div className="relative inline-flex items-end mb-6 text-right float-right">
                    <div className="order-3 mr-0 ml-4">
                      <img
                        src={avater01}
                        alt=""
                        className="rounded-full h-9 w-9"
                      />
                    </div>
  
                    <div>
                      <div className="flex gap-2 mb-2 justify-end ">
                        <div className="relative order-2 px-5 py-3 text-gray-700 rounded-lg rounded-br-none  bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                          <p className="mb-0">
                            Hey, any update?
                          </p>
                          <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300">
                            
                            <span className="align-middle">10:02</span>
                          </p>
                          <div className="absolute border-[5px] border-transparent border-r-gray-50 border-t-gray-50  right-0 bottom-2 "></div>
                        </div>
                      </div>
  
                      <div className="font-medium text-gray-700  text-[14px] dark:text-gray-300">
                        Patricia Smith
                      </div>
                    </div>
                  </div>
                </li>
  
             
  
              </ul>
            </div>
  
            {/* ------------------ Chatbox close ------------------ */}
  
            {/* ------------------ Chat Text Input ----------------  */}
            <div className="z-40 w-full p-6 mb-0 bg-gray-50 border-t lg:mb-1 border-gray-50">
              <div className="flex">
                <div className="flex-grow">
                  <input
                    type="text"
                    className="w-full border-transparent rounded bg-gray-50 placeholder:text-[16px] text-[16px] focus:outline-none"
                    
                    placeholder="Enter Message..."
                  />
                </div>
                <div>
                  <ul className="mb-0 flex gap-6">
                    <li className="inline-block" title="Attached File">
                      <button
                        type="button"
                        className="border-transparent btn group/tooltip text-slate-400 "
                      >
                        <File />
                      </button>
                    </li>
                    <li className="inline-block">
                      <button
                        type="submit"
                        className="text-slate-400 border-transparent btn"
                      >
                        <SendHorizonalIcon />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ------------------ Chat Text Input close----------------  */}
  
  
          </div>
        </div>
  
      </div>
    );
  };
  
  export default ChatRoom;
  