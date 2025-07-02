import SideNavigationBar from "./components/SideNavigationBar";
import TopNavigationBar from "./components/TopNavigationBar,";
import { useState } from "react";
function App() {
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
      </div>
    </div>
  );
}
export default App;
