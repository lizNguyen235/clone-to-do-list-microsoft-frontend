import TaskCard from "./TaskCard";
import SideNavigationBar from "./SideNavigationBar";
import TaskInput from "./TaskInput";
import TopNavigationBar from "./TopNavigationBar,";
import { useState } from "react";

export default function MainLayout({ isOpen, setIsOpen, tabIndex }) {
  let label = "";
  switch (tabIndex) {
    case 0:
      label = "My Day";
      break;
    case 1:
      label = "Important";
      break;
    case 2:
      label = "Planned";
      break;
    case 3:
      label = "Assigned to me";
      break;
    case 4:
      label = "Tasks";
      break;
    default:
      label = "My Day";
  }
  return (
    <div className="w-full h-screen bg-gray-100 px-10">
      <TopNavigationBar label={label} setIsOpen={setIsOpen} isOpen={isOpen} />
      <TaskInput />
      <TaskCard title="ASDFSDF" subtitle="Tasks" />
    </div>
  );
}
