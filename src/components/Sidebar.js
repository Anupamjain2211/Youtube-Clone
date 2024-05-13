import React from "react";
import { GoHomeFill } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="border border-blue-400 w-[14%] ml-5">
      <div className="flex w-[45%] justify-between">
        <GoHomeFill size={"24px"} />
        <p>Home</p>
      </div>
    </div>
  );
};

export default Sidebar;
