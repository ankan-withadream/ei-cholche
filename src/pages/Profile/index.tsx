import avater4 from "../../assets/avatar-4.jpg";

const Profile = () => {
  return (
     <div className="tab-content">
            <div>
              <div className="px-6 pt-6">
              
                <h4 className="mb-0 text-gray-700 dark:text-gray-50">
                  My Profile
                </h4>
              </div>
  
              <div className="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
                <div className="mb-4">
                  <img
                    src={avater4}
                    className="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800"
                    alt=""
                  />
                </div>
  
                <h5 className="mb-1 text-[16px] dark:text-gray-50">Patricia Smith</h5>
  
                <h5 className="mb-0 truncate text-[14px] block">
                  <a href="#" className="text-gray-500 dark:text-gray-50">
                    <i className="text-green-500 ml-1 ri-record-circle-fill text-[10px] "></i>{" "}
                    
                    Active
                  </a>
                </h5>
               
              </div>
  
              <div className="p-6 h-[550px]" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: "0" }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: "24px" }}
                        >
                          <div>
                            <p className="mb-6 text-gray-500 dark:text-gray-300">
                              If several languages coalesce,the grammar of the
                              resulting language is more simple and regular than
                              that of the individual.
                            </p>
                          </div>
  
                          <div data-tw-accordion="collapse">
                            <div className="text-gray-700 accordion-item">
                              <h2>
                                <button
                                  type="button"
                                  className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600"
                                >
                                  <span className="m-0 text-[14px] dark:text-gray-50 font-semibold block">
                                    <i className="mr-2 align-middle ri-user-2-line d-inline-block"></i>{" "}
                                    About
                                  </span>
                                  <span className="m-0 text-[14px] dark:text-gray-50 font-semibold hidden">
                                    About{" "}
                                    <i className="ml-2 align-middle ri-user-2-line d-inline-block"></i>
                                  </span>
                                  <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                </button>
                              </h2>
  
                              <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                <div className="p-5">
                                  <div>
                                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                                      Name
                                    </p>
                                    <h5 className="text-sm dark:text-gray-50">
                                      Patricia Smith
                                    </h5>
                                  </div>
                                  <div className="mt-5">
                                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                                      Email
                                    </p>
                                    <h5 className="text-sm dark:text-gray-50">
                                      adc@123.com
                                    </h5>
                                  </div>
                                  <div className="mt-5">
                                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                                      Time
                                    </p>
                                    <h5 className="text-sm dark:text-gray-50">
                                      11:40 AM
                                    </h5>
                                  </div>
                                  <div className="mt-5">
                                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                                      Location
                                    </p>
                                    <h5 className="text-sm dark:text-gray-50">
                                      California, USA
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
  
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="simplebar-placeholder"></div>
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div className="simplebar-scrollbar"></div>
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div className="simplebar-scrollbar"></div>
                </div>
              </div>
            </div>
          </div> 
  )
}

export default Profile

  