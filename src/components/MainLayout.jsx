import TaskCard from "./TaskCard";
import SideNavigationBar from "./SideNavigationBar";
import TaskInput from "./TaskInput";
import TopNavigationBar from "./TopNavigationBar,";
import { useState } from "react";

export default function MainLayout({ isOpen, setIsOpen }) {
  return (
    <div className="w-full h-screen bg-gray-100 px-2">
      <TopNavigationBar
        label={"My Day"}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <TaskInput />
      <TaskCard title="ASDFSDF" subtitle="Tasks" />
    </div>
  );
}
