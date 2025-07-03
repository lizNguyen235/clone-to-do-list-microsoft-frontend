import SideNavigationBar from "./components/SideNavigationBar";
import TaskInput from "./components/TaskInput";
import TopNavigationBar from "./components/TopNavigationBar,";
import { useState } from "react";
import TaskCard from "./components/TaskCard";
import MainLayout from "./components/MainLayout";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="flex flex-row min-h-screen min-w-screen">
      <SideNavigationBar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setTabIndex={setTabIndex}
        tabIndex={tabIndex}
      />
      <MainLayout isOpen={isOpen} setIsOpen={setIsOpen} tabIndex={tabIndex} />
    </div>
  );
}
export default App;
