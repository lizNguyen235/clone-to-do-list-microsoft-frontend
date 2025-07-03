import {
  IoSunnyOutline,
  IoMenuOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoAddSharp,
} from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlineCalendarMonth,
  MdOutlineGroup,
  MdEdit,
  MdDone,
  MdOutlineAddBox,
} from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
export default function SideNavigationBar({
  setIsOpen,
  isOpen,
  setTabIndex,
  tabIndex,
}) {
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
          <SideBarContent setTabIndex={setTabIndex} tabIndex={tabIndex} />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <Footer />
      </div>
    </nav>
  );
}

function SideBarContent({ setTabIndex, tabIndex }) {
  return (
    <div className="flex flex-col">
      <SideBarItem
        icon={<IoSunnyOutline size={24} />}
        label="My Day"
        index={0}
        isActive={tabIndex === 0}
        setTabIndex={setTabIndex}
      />
      <SideBarItem
        icon={<FaRegStar size={24} />}
        label="Important"
        index={1}
        isActive={tabIndex === 1}
        setTabIndex={setTabIndex}
      />
      <SideBarItem
        icon={<IoCalendarOutline size={24} />}
        label="Planned"
        index={2}
        isActive={tabIndex === 2}
        setTabIndex={setTabIndex}
      />
      <SideBarItem
        icon={<IoPersonOutline size={24} />}
        label="Assigned to me"
        index={3}
        isActive={tabIndex === 3}
        setTabIndex={setTabIndex}
      />
      <SideBarItem
        icon={<GrHomeRounded size={24} />}
        label="Tasks"
        index={4}
        isActive={tabIndex === 4}
        setTabIndex={setTabIndex}
      />
      <hr class="h-[1px] bg-gray-400 border-none w-[266px] self-center" />
      {/* Add more sidebar content here */}
      <AddNewListItem icon={<IoAddSharp size={32} />} label="New List" />
    </div>
  );
}

function SideBarItem({ icon, label, setTabIndex, index, isActive }) {
  function handleClick() {
    setTabIndex(index);
  }

  return (
    <div
      onClick={handleClick}
      className={`flex flex-row items-center cursor-pointer ${
        isActive
          ? "bg-blue-100 border-l-blue-600 border-l-4"
          : "hover:bg-gray-200"
      }   w-full`}
    >
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
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineMail size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineCalendarMonth size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdOutlineGroup size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200">
        <MdEdit size={24} />
      </div>
      <div className="p-2 hover:bg-gray-200 text-blue-600">
        <MdDone size={24} />
      </div>
    </div>
  );
}
