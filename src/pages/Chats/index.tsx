import avater2 from "../../assets/avatar-2.jpg"
import avater3 from "../../assets/avatar-3.jpg"
import avater4 from "../../assets/avatar-4.jpg"

const Chats = () => {
  return (
       <div className="tab-content active">
          <div>
            <div className="px-6 pt-6">
              <h4 className="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>

              <div className="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                <span
                  className="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600"
                  id="basic-addon1"
                >
                  <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i>
                </span>
                <input
                  type="text"
                  className="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-gray-400"
                  placeholder="Search messages or users"
                  aria-label="Search messages or users"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

         
            <div>
              <h5 className="px-6 mb-4 text-[16px] dark:text-gray-50">Recent</h5>

              <div
                className="h-[610px] px-2 simplebar-scrollable-y"
                data-simplebar="init"
              >
                <div
                  className="simplebar-wrapper"
                  style={{ margin: "0px -8px" }}
                >
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: "0px", bottom: "0px" }}
                    >
                     
                  
                        <div
                          className="simplebar-content"
                          style={{ padding: "0px 8px" }}
                        >
                          <ul className="chat-user-list">
                            
                            <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                              <a href="#">
                                <div className="flex">
                                  <div className="relative self-center mr-3">
                                    <img
                                      src={avater2}
                                      className="rounded-full w-9 h-9"
                                      alt=""
                                    />
                                    <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 right-1 dark:border-zinc-600"></span>
                                  </div>

                                  <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-1 text-base truncate dark:text-gray-50">
                                      Patrick Hendricks
                                    </h5>
                                    <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-[14px]">
                                      Hey! there I'm available
                                    </p>
                                  </div>
                                  <div className="text-gray-500 text-[11px] dark:text-gray-300">
                                    05 min
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                              <a href="#">
                                <div className="relative flex">
                                  <div className="relative self-center mr-3 ">
                                    <img
                                      src={avater3}
                                      className="rounded-full w-9 h-9"
                                      alt=""
                                    />
                                    <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 right-1 dark:border-zinc-600"></span>
                                  </div>
                                  <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-1 text-base truncate dark:text-gray-50">
                                      Mark Messer
                                    </h5>
                                    <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-[14px]">
                                      <i className="align-middle ri-image-fill me-1 ms-0"></i>{" "}
                                      Images
                                    </p>
                                  </div>
                                  <div className="text-gray-500 text-[11px] dark:text-gray-300">
                                    12 min
                                  </div>
                                  <div className="absolute bottom-0 right-0 ">
                                    <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-[11px]">
                                      02
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                              <a href="#">
                                <div className="flex">
                                  <div className="relative self-center mr-3 ">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                      <span className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                        G
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-1 text-base truncate dark:text-gray-50">
                                      General
                                    </h5>
                                    <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-[14px]">
                                      This theme is awesome!
                                    </p>
                                  </div>
                                  <div className="text-gray-500 text-[11px] dark:text-gray-300">
                                    20 min
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="px-5 py-[15px] border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                              <a href="#">
                                <div className="flex">
                                  <div className="relative self-center mr-3 ">
                                    <img
                                      src={avater4}
                                      className="rounded-full w-9 h-9"
                                      alt=""
                                    />
                                    <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 right-1  dark:border-zinc-600"></span>
                                  </div>
                                  <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-1 text-base truncate dark:text-gray-50">
                                      Doris Brown
                                    </h5>
                                    <p className="text-gray-500 dark:text-gray-300 text-[14px]">
                                      Nice to meet you
                                    </p>
                                  </div>
                                  <div className="text-gray-500 text-[11px] dark:text-gray-300">
                                    10:12 AM
                                  </div>
                                </div>
                              </a>
                            </li>

                            <li className="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                              <a href="#">
                                <div className="relative flex ">
                                  <div className="relative self-center mr-3">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                      <span className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                        D
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-1 text-base truncate dark:text-gray-50">
                                      Designer
                                    </h5>
                                    <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-[14px]">
                                      Next meeting tomorrow 10.00AM
                                    </p>
                                  </div>
                                  <div className="text-gray-500 text-[11px] dark:text-gray-300">
                                    12:01 PM
                                  </div>
                                  <div className="absolute bottom-0 right-0 ">
                                    <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-[11px]">
                                      01
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
  )
}

export default Chats