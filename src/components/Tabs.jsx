import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`${tab === activeTab ? "bg-blue-400" : "bg-gray-700"} transition px-4 py-2 cursor-pointer active:scale-95 rounded`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
