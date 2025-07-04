import { useState, useRef, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function CustomMenu({ menu }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Phân loại item
  const normalItems = menu.items.filter((item) => !item.isFooter);
  const footerItem = menu.items.find((item) => item.isFooter);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:text-black"
      >
        {menu.icon || <FaRegCalendarAlt />}
      </div>

      {open && (
        <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg border z-50">
          <div className="px-4 py-2 font-semibold border-b text-center">
            {menu.title}
          </div>

          {normalItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {item.leading}
                <span>{item.label}</span>
              </div>
              {item.trailing}
            </div>
          ))}

          {<hr className="my-1" />}

          {footerItem && (
            <div
              onClick={() => {
                footerItem.onClick();
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {footerItem.leading}
              <span>{footerItem.label}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
