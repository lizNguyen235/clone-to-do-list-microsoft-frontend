import TaskCard from "./TaskCard";
import SideNavigationBar from "./SideNavigationBar";
import TaskInput from "./TaskInput";
import TopNavigationBar from "./TopNavigationBar,";
import { useState } from "react";

export default function MainLayout({}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-row min-h-screen min-w-screen">
      <SideNavigationBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="w-full h-screen bg-gray-100">
        <TopNavigationBar
          label={"My Day"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <TaskInput />
        <TaskCard title="ASDFSDF" subtitle="Tasks" />
      </div>
      <div></div>
    </div>
  );
}
