import { useState } from "react";
import { FaRegCalendarAlt, FaRedo } from "react-icons/fa";
import { MdOutlineCalendarToday, MdAccessTime } from "react-icons/md";
import DueDateMenu from "./PopupMenu";
import Menu from "../models/Menu";

export default function TaskInput() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      console.log("Task added:", task);
      setTask("");
    }
  };

  // 🗕 Menu 1: Due Date
  const dueDateMenu = new Menu("Due", <FaRegCalendarAlt />);
  dueDateMenu.addItem({
    label: "Today",
    leading: <MdOutlineCalendarToday />,
    trailing: <span className="text-sm text-gray-500">Thu</span>,
    onClick: () => console.log("Due: Today"),
  });
  dueDateMenu.addItem({
    label: "Tomorrow",
    leading: <MdOutlineCalendarToday />,
    trailing: <span className="text-sm text-gray-500">Fri</span>,
    onClick: () => console.log("Due: Tomorrow"),
  });
  dueDateMenu.addItem({
    label: "Next week",
    leading: <MdOutlineCalendarToday />,
    trailing: <span className="text-sm text-gray-500">Mon</span>,
    onClick: () => console.log("Due: Next week"),
  });
  dueDateMenu.addItem({
    label: "Pick a date",
    leading: <MdOutlineCalendarToday />,
    onClick: () => console.log("Pick a date"),
    isFooter: true,
  });

  // 🕎 Menu 2: Reminder
  const reminderMenu = new Menu("Reminder", <MdAccessTime />);
  reminderMenu.addItem({
    label: "Later today",
    leading: <MdAccessTime />,
    trailing: <span className="text-sm text-gray-500">4:00 PM</span>,
    onClick: () => console.log("Reminder: Later today"),
  });
  reminderMenu.addItem({
    label: "Tomorrow",
    leading: <MdAccessTime />,
    trailing: <span className="text-sm text-gray-500">Sat, 9 AM</span>,
    onClick: () => console.log("Reminder: Tomorrow"),
  });
  reminderMenu.addItem({
    label: "Next week",
    leading: <MdAccessTime />,
    trailing: <span className="text-sm text-gray-500">Mon, 9 AM</span>,
    onClick: () => console.log("Reminder: Next week"),
  });
  reminderMenu.addItem({
    label: "Pick a date & time",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Pick a date & time"),
    isFooter: true,
  });

  // 🔄 Menu 3: Repeat
  const repeatMenu = new Menu("Repeat", <FaRedo />);
  repeatMenu.addItem({
    label: "Daily",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Daily"),
  });
  repeatMenu.addItem({
    label: "Weekdays",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Weekdays"),
  });
  repeatMenu.addItem({
    label: "Weekly",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Weekly"),
  });
  repeatMenu.addItem({
    label: "Monthly",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Monthly"),
  });
  repeatMenu.addItem({
    label: "Yearly",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Yearly"),
  });
  repeatMenu.addItem({
    label: "Custom",
    leading: <FaRegCalendarAlt />,
    onClick: () => console.log("Repeat: Custom"),
    isFooter: true,
  });

  return (
    <div className="bg-white rounded-md shadow-sm border mb-10">
      {/* Input Task */}
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

      {/* Footer menu */}
      <div className="mt-3 flex items-center justify-between px-4 bg-gray-200 w-full h-10">
        <div className="flex space-x-4 text-gray-500 text-sm">
          <DueDateMenu menu={dueDateMenu} />
          <DueDateMenu menu={reminderMenu} />
          <DueDateMenu menu={repeatMenu} />
        </div>
        <button
          onClick={handleAdd}
          className="text-gray-500 text-sm hover:text-black border p-1 shadow-2xl bg-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}
