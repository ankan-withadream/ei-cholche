import { File, SendHorizonalIcon } from "lucide-react";

import ChatHeader from "@/components/Chatheader";
import Bubble1 from "@/components/Chatbubble/Bubble1";
import Bubble2 from "@/components/Chatbubble/Bubble2";
import Chatdate from "@/components/Chatdate";

const ChatRoom = () => {
  return (
    <div className="w-full overflow-hidden transition-all duration-150 bg-white user-chat">
      <div className="lg:flex">
        <div className="relative w-full overflow-hidden ">
          {/* --------------------- Chatbox Header---------------------*/}

          <ChatHeader />
          {/* --------------------- Chatbox Header close---------------------*/}


          {/* --------------------- Chatbox ---------------------*/}

          <div className="h-[76vh] p-4 lg:p-6 m-2 ">
            <ul className="mb-0">
              <Bubble1 />

              <Bubble2 />

              <Chatdate />

              <Bubble1 />
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
