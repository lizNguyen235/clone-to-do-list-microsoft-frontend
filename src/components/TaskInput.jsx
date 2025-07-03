import { useState } from "react";
import { FaRegCalendarAlt, FaBell, FaRedo } from "react-icons/fa";

export default function TaskInput() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      console.log("Task added:", task);
      setTask("");
    }
  };

  return (
    <div className=" bg-white rounded-md shadow-sm border mb-10">
      <div className="flex items-center space-x-2 px-4 pt-2">
        <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex-shrink-0 mt-1"></div>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 outline-none text-sm p-1"
        />
      </div>

      <div className="mt-3 flex items-center justify-between px-4 bg-gray-200 w-full h-10">
        <div className="flex space-x-4 text-gray-500 text-sm">
          <FaRegCalendarAlt className="cursor-pointer hover:text-black" />
          <FaBell className="cursor-pointer hover:text-black" />
          <FaRedo className="cursor-pointer hover:text-black" />
        </div>
        <button
          onClick={handleAdd}
          className={`text-gray-500 text-sm hover:text-black border p-1 shadow-2xl bg-white`}
        >
          Add
        </button>
      </div>
    </div>
  );
}
