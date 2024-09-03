import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBoltLightning, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdInbox } from "react-icons/md";
import { PiDotsThreeCircle, PiDotsThreeCircleFill } from "react-icons/pi";
import { RiNotification4Fill } from "react-icons/ri";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard/page";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <CiSearch />,
  },
  {
    title: "Notifications",
    icon: <RiNotification4Fill />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Grok",
    icon: <MdInbox />,
  },
  {
    title: "Communities",
    icon: <IoIosPeople />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
  },
  {
    title: "Verified Orgs",
    icon: <FaBoltLightning />,
  },
  {
    title: "Profile",
    icon: <IoPerson />,
  },
  {
    title: "More",
    icon: <PiDotsThreeCircleFill />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        {/* sidebar  */}
        <div className="col-span-3 pt-1 px-4">
          <div className="text-2xl h-fit w-fit rounded-full hover:bg-gray-900 p-2 cursor-pointer transition-all">
            <FaXTwitter />
          </div>
          <div className="mt-2 text-2xl font-normal pr-4">
            <ul className="space-y-2">
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-3 hover:bg-gray-900 rounded-full px-2 py-2 w-fit cursor-pointer text-xl"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1A8CD8]  rounded-full w-[85%] mt-3 p-4 pb-2.5 pt-2.5 text-lg font-semibold">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-[#2F3336] -ml-8 h-screen overflow-scroll scrollbar-hide ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
