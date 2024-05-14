import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const sidebarItems = [
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <GoHomeFill size={"24px"} />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
  {
    icons: <SiYoutubeshorts size={"24px"} />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size={"24px"} />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  return (
    <div className={`relative left-0 "w-[20%]" : "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
      {sidebarItems.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ">
            {item.icons}
            <p className="ml-5">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
