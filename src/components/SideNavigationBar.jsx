import {
  IoStarOutline,
  IoSunnyOutline,
  IoMenuOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoAddSharp,
} from "react-icons/io5";

import { MdOutlineAddBox, MdOutlineMail } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
export default function SideNavigationBar({ setIsOpen, isOpen }) {
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={`flex flex-col md:w-[290px] w-[200px] h-screen shadow-lg bg-white border-r border-gray-300 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="h-[48px] px-[24px] mt-4">
        <div className="">
          <button
            onClick={handleMenuClick}
            className="cursor-pointer p-2 hover:bg-gray-200"
          >
            <IoMenuOutline size={24} />
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <SideBarContent />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <Footer />
      </div>
    </nav>
  );
}

function SideBarContent() {
  return (
    <div className="flex flex-col">
      <SideBarItem icon={<IoSunnyOutline size={24} />} label="My Day" />
      <SideBarItem icon={<IoStarOutline size={24} />} label="Importance" />
      <SideBarItem icon={<IoCalendarOutline size={24} />} label="Planned" />
      <SideBarItem
        icon={<IoPersonOutline size={24} />}
        label="Assigned to me"
      />
      <SideBarItem icon={<GrHomeRounded size={24} />} label="Tasks" />
      <hr class="h-[1px] bg-gray-400 border-none w-[266px] self-center" />
      {/* Add more sidebar content here */}
      <AddNewListItem icon={<IoAddSharp size={32} />} label="New List" />
    </div>
  );
}

function SideBarItem({ icon, label }) {
  return (
    <div className="flex flex-row items-center cursor-pointer  hover:bg-gray-200 rounded w-full ">
      <div className="flex items-center w-full px-[24px] py-[12px]">
        <div className="mr-2">{icon}</div>
        <span>{label}</span>
        <div className="flex-1 text-end ">1</div>
      </div>
    </div>
  );
}

function AddNewListItem({ icon, label }) {
  return (
    <div className="flex flex-row items-center cursor-pointer rounded w-full pr-2">
      <div className="flex items-center flex-1 px-[20px] py-[12px] hover:bg-gray-200">
        <div className="mr-1">{icon}</div>
        <span className="flex-1 ">{label}</span>
      </div>
      <div className="size-fit p-2 hover:bg-gray-200">
        <MdOutlineAddBox size={30} />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-row items-center justify-around py-2">
      <div className=" p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
    </div>
  );
}
