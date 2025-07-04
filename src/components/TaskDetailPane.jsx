import {
  FaRegCircle,
  FaRegStar,
  FaPlus,
  FaSun,
  FaBell,
  FaCalendarAlt,
  FaSyncAlt,
  FaTags,
  FaPaperclip,
  FaStickyNote,
} from "react-icons/fa";

export default function TaskDetailPane({ title = "haha" }) {
  return (
    <div className="w-80 bg-white shadow-lg rounded-r-lg flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <FaRegCircle className="text-xl text-gray-400 cursor-pointer" />
        <h2 className="flex-1 mx-2 text-lg font-medium">{title}</h2>
        <FaRegStar className="text-xl text-gray-400 cursor-pointer hover:text-yellow-500" />
      </div>

      {/* Body */}
      <div className="px-4 py-3 space-y-2 flex-1 overflow-auto">
        {/* Add step */}
        <div className="flex items-center text-blue-600 hover:bg-blue-50 rounded p-2 cursor-pointer">
          <FaPlus className="mr-3" />
          <span>Add step</span>
        </div>

        {/* Divider */}
        <hr />

        {/* Menu items */}
        <div className="space-y-1">
          {[
            { icon: <FaSun />, label: "Add to My Day" },
            { icon: <FaBell />, label: "Remind me" },
            { icon: <FaCalendarAlt />, label: "Add due date" },
            { icon: <FaSyncAlt />, label: "Repeat" },
            { icon: <FaTags />, label: "Pick a category" },
            { icon: <FaPaperclip />, label: "Add file" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center px-2 py-2 hover:bg-gray-100 rounded cursor-pointer text-gray-700"
            >
              <span className="w-6 text-center text-lg">{item.icon}</span>
              <span className="ml-3">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr />

        {/* Add note */}
        <div className="px-2 py-2 hover:bg-gray-100 rounded cursor-text text-gray-700">
          <FaStickyNote className="inline-block mr-3 text-lg align-middle" />
          <span className="align-middle">Add note</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t text-sm text-gray-500 flex items-center justify-between">
        <span>Created Today</span>
        <button className="p-1 hover:bg-gray-100 rounded text-gray-600">
          🗑️
        </button>
      </div>
    </div>
  );
}
