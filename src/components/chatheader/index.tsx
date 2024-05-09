import { ArrowLeft, GroupIcon, Search } from "lucide-react"
import avater04 from "../../assets/avatar-4.jpg";


const ChatHeader = () => {
  return (
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
  )
}

export default ChatHeader