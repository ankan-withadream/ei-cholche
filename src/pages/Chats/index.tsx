import { Chat } from "@/types";
import { chatdata } from "../../dummy";
import { useEffect } from "react";
import appconfig from "../../../appconfig.json";

const renderChats = (person: Chat, idx: number) => {  

  return (
    <li
      className="px-5 py-[15px] hover:bg-slate-100  transition-all ease-in-out border-b border-white/20 "
      key={idx}
    >
      <a href={`/chats/${idx}`}>
        <div className="flex">
          <div className="relative self-center mr-3">
            <img src={person.img} className="rounded-full w-9 h-9" alt="" />
            {person.active && (
              <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 right-1 dark:border-zinc-600"></span>
            )}
          </div>

          <div className="flex-grow overflow-hidden">
            <h5 className="mb-1 text-base truncate dark:text-gray-50">
              {person.name}
            </h5>
            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-[14px]">
              {person.lastMessage || ''}
            </p>
          </div>
          <div className="text-gray-500 text-[11px] dark:text-gray-300">
            {person.lastMessageTime || ''}
          </div>
        </div>
      </a>
    </li>
  );
};

const Chats = () => {

    // Use useEffect to fetch data only once on component mount
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!appconfig?.apiUrl) {
            throw new Error('API URL is not defined');
          }
          const response = await fetch(`${appconfig.apiUrl}/kigo`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty array means this effect runs only once on component mount
    
  return (
    <div className="tab-content active">
      <div>
        <div className="px-6 pt-6">
          <h4 className="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>

          <div className="py-1 mt-5 mb-5 rounded bg-slate-100 ">
            <span className="bg-slate-100  pe-1 ps-3 " id="basic-addon1"></span>
            <input
              type="text"
              className="border-0 bg-slate-100  placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:text-gray-400"
              placeholder="Search messages or users"
              aria-label="Search messages or users"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div>
          <h5 className="px-6 mb-4 text-[16px] dark:text-gray-50">Recent</h5>

          <ul className="chat-user-list overflow-y-auto">
            {chatdata.map((person, idx) => {
              return renderChats(person, idx);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chats;
