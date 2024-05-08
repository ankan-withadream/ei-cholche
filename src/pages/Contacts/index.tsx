import { MoreVerticalIcon } from "lucide-react"

const Contacts = () => {
  return (
    <div className="tab-content">
    <div>
      <div className="p-6 pb-0">
        <div className="float-right">
          <div className="relative">
            <button
              type="button"
              className="px-4 text-lg text-gray-500 group/tag"
              data-tw-toggle="modal"
              data-tw-target="#modal-id2"
            >
              <i className="mr-1 ri-user-add-line ms-0 dark:text-violet-200"></i>
              <span className="absolute items-center hidden mb-6 top-8 group-hover/tag:flex -left-8">
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                  Add Contact
                </span>
                <span className="w-3 h-3 -mt-6 rotate-45 bg-black -ml-12 "></span>
              </span>
            </button>
          </div>
        </div>
        <h4 className="mb-6 dark:text-gray-50">Contacts</h4>

        <div
          className="relative z-50 hidden modal"
          id="modal-id2"
          aria-modal="true"
          role="modal-fifth"
        >
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
            <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
              <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                <div className="bg-violet-800/10 dark:bg-zinc-700">
                  <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-500">
                    <h5
                      className="mb-0 text-gray-800 text-[16px] dark:text-gray-50"
                      id="addgroup-exampleModaL"
                    >
                      Add Contact
                    </h5>
                    <button
                      type="button"
                      className="absolute top-3 right-2.5  text-gray-400 border-transparent hover:bg-gray-50/50/50 hover:text-gray-900 rounded-lg text-sm px-2 py-1 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:text-gray-100"
                      data-tw-dismiss="modal"
                    >
                      <i className="text-xl text-gray-500 mdi mdi-close dark:text-zinc-100/60"></i>
                    </button>
                  </div>
                  <div className="p-4">
                    <form>
                      <div className="mb-5 text-left ">
                        <label className="block mb-2 dark:text-gray-300">
                          Email
                        </label>
                        <input
                          type="text"
                          className="py-1.5 bg-transparent border-gray-100 rounded placeholder:text-[13px] w-full focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:placeholder:text-gray-300"
                          id="addgroupname-input1"
                          placeholder="Enter Email"
                        />
                      </div>

                      <div className="mb-5 text-left">
                        <label className="block mb-2 dark:text-gray-300">
                          Invatation Message
                        </label>
                        <textarea
                          className="w-full bg-transparent border-gray-100 rounded placeholder:text-[13px] focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:placeholder:text-gray-300"
                          id="addgroupdescription-input1"
                          rows={3}
                          placeholder="Enter Message"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="flex justify-end p-4 border-t border-gray-100 dark:border-zinc-500">
                    <div>
                      <button
                        type="button"
                        className="border-0 btn hover:underline group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500"
                        data-tw-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=green]:hover:bg-green-600 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=red]:hover:bg-red-600"
                      >
                        Invite Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-1 mt-5 mb-5 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 rounded group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
          <span
            className="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600"
            id="basic-addon"
          >
            <i className="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
          </span>
          <input
            type="text"
            className="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:dark:text-gray-300"
            placeholder="Search users.."
            aria-describedby="basic-addon"
          />
        </div>
      </div>

      <div className="h-[80vh]" data-simplebar="init">
        <div className="simplebar-wrapper">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset">
              <div
                className="simplebar-content-wrapper"
                role="region"
                aria-label="scrollable content"
                style={{ height: "auto", overflow: "hidden" }}
              >
                <div className="simplebar-content">
                  <div className="p-6">
                    <div>
                      <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                        A
                      </div>

                      <ul className="list-unstyled contact-list">
                        <li className="px-5 py-[15px]">
                          <div className="flex items-center">
                            <div className="flex-grow">
                              <h5 className="m-0 text-gray-700 text-[14px] dark:text-gray-50">
                                Albert Rodarte
                              </h5>
                            </div>
                            <div className="relative flex-shrink-0 dropdown">
                              <button
                                className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButtonB"
                              >
                                <MoreVerticalIcon size={20} />
                              </button>
                            </div>
                          </div>
                        </li>

                        <li className="px-5 py-[15px]">
                          <div className="flex items-center">
                            <div className="flex-grow">
                              <h5 className="m-0 text-gray-700 text-[14px] dark:text-gray-50">
                                Allison Etter
                              </h5>
                            </div>
                            <div className="relative flex-shrink-0 dropdown">
                              <button
                                className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButtonC"
                              >
                                <MoreVerticalIcon size={20} />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                        C
                      </div>

                      <ul className="list-unstyled contact-list">
                        <li className="px-5 py-[15px]">
                          <div className="flex items-center">
                            <div className="flex-grow">
                              <h5 className="m-0 text-gray-700 text-[14px] dark:text-gray-50">
                                Craig Smiley
                              </h5>
                            </div>
                            <div className="relative flex-shrink-0 dropdown">
                              <button
                                className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButtonD"
                              >
                                <MoreVerticalIcon size={20} />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                        D
                      </div>

                      <ul className="list-unstyled contact-list">
                        <li className="px-5 py-[15px]">
                          <div className="flex items-center">
                            <div className="flex-grow">
                              <h5 className="m-0 text-gray-700 text-[14px] dark:text-gray-50">
                                Daniel Clay
                              </h5>
                            </div>
                            <div className="relative flex-shrink-0 dropdown">
                              <button
                                className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButtonEM"
                              >
                                <MoreVerticalIcon size={20} />
                              </button>
                            </div>
                          </div>
                        </li>

                        <li className="px-5 py-[15px]">
                          <div className="flex items-center">
                            <div className="flex-grow">
                              <h5 className="m-0 text-gray-700 text-[14px] dark:text-gray-50">
                                Doris Brown
                              </h5>
                            </div>

                            <div className="relative flex-shrink-0 dropdown">
                              <button
                                className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButtonES"
                              >
                                <i className="text-lg ri-more-2-fill"></i>
                                <MoreVerticalIcon size={20} />
                              </button>
                            </div>
                          </div>
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
    </div>
  </div> 
  )
}

export default Contacts