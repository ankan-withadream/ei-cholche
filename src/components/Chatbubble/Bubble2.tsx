import avater01 from "../../assets/avatar-1.jpg";

const Bubble2 = () => {
  return (
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
  )
}

export default Bubble2