import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function TaskCard({ title = "ASDFSDF", subtitle = "Tasks" }) {
  const [isStarred, setIsStarred] = useState(true);

  return (
    <div className="">
      <div className="flex items-center justify-between bg-white shadow-md border px-[16px] rounded-md">
        {/* Left: Radio & Text */}
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex-shrink-0 mt-1"></div>
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </div>

        {/* Right: Star icon */}
        <button onClick={() => setIsStarred(!isStarred)}>
          {isStarred ? (
            <FaStar size={20} className="text-blue-600" />
          ) : (
            <FaRegStar size={20} className="text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}
