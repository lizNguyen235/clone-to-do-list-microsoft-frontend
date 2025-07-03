import { IoMenuOutline, IoGrid } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { VscListSelection } from "react-icons/vsc";
import { LuArrowUpDown } from "react-icons/lu";
import { BsLightbulb } from "react-icons/bs";
import { BsWindowDesktop } from "react-icons/bs";
export default function TopNavigationBar({ label, setIsOpen, isOpen, icon }) {
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex items-center justify-between h-[72px]   border-gray-300 w-full">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleMenuClick}
          className="text-gray-600 hover:bg-gray-200  cursor-pointer p-2"
        >
          <IoMenuOutline className="w-6 h-6" />
        </button>

        <h1 className="font-bold text-lg cursor-default">{label}</h1>

        <button className="text-gray-600 hover:bg-gray-200 p-2 cursor-pointer">
          <BsThreeDots className="w-6 h-6" />
        </button>

        <Item icon={<IoGrid className="w-6 h-6" />} label="Grid" />
        <Item icon={<VscListSelection className="w-6 h-6" />} label="List" />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 m-4">
        <Item icon={<LuArrowUpDown className="w-6 h-6" />} label="Sort" />
        <Item icon={<BsWindowDesktop className="w-6 h-6" />} label="Group" />
        <Item icon={<BsLightbulb className="w-6 h-6" />} label="Suggestion" />
      </div>
    </nav>
  );
}

function Item({ icon, label }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
      <div className="text-gray-600 hover:text-gray-800">{icon}</div>
      <span>{label}</span>
    </div>
  );
}
