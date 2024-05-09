import avater04 from "../../assets/avatar-4.jpg";

const Bubble1 = () => {
  return (
    <li className="clear-both py-4">
      <div className="flex items-end gap-3">
        <div>
          <img src={avater04} alt="" className="rounded-full h-9 w-9" />
        </div>

        <div>
          <div className="flex gap-2 mb-2">
            <div className="relative px-5 py-3 text-white rounded-lg rounded-bl-none bg-violet-500">
              <p className="mb-0">Good morning</p>
              <p className="mt-1 mb-0 text-xs text-right text-white/50">
                <span className="align-middle"> 10:00</span>
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
  );
};

export default Bubble1;
