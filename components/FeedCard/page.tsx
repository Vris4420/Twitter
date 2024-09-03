import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiRepost } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { TbAntennaBars4 } from "react-icons/tb";
import { MdBookmarkBorder } from "react-icons/md";
import { RiShare2Fill } from "react-icons/ri";

const FeedCard: React.FC = () => {
  return (
    <div className="border-t border-t-[#2F3336] p-4 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/157477028?v=4"
            alt="profile"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 ml-5 ">
          <h5>Vrishank</h5>
          <p>
            In Switzerland, 1 in 7 adults is a millionaire. This is 5 times more
            than in the US. So, I wanted to learn their wealth-building habits.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[98%]">
            <div className="hover:bg-[#145987] rounded-full p-1.5">
              <BiMessageRounded />
            </div>
            <div className="hover:bg-[#036A48] rounded-full p-1.5">
              <BiRepost />
            </div>
            <div className="hover:bg-[#480B28] rounded-full p-1.5">
              <GoHeart />
            </div>
            <div className="hover:bg-[#145987] rounded-full p-1.5">
              <TbAntennaBars4 />
            </div>
            <div className="flex justify-evenly">
              <div className="mr-3 hover:bg-[#145987] rounded-full p-1.5">
                <MdBookmarkBorder />
              </div>
              <div className="hover:bg-[#145987] rounded-full p-1.5">
                <RiShare2Fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
