import { forwardRef } from "react";
import tagSvg from "@/assets/svg/tag.svg";

type Props = {
  open: boolean;
  toggle: () => void;
  className?: string;
};

const SearchDropDown = forwardRef<HTMLDivElement, Props>(
  ({ open }, ref) => {
    return (
      <div
        ref={ref}
        className={`${
          open
            ? "flex flex-col fixed opacity-1 left-[410px] z-10 top-[80px] bg-[#212734] w-[500px] h-[380px] rounded-[10px]"
            : "hidden"
        }`}
      >
        <div className="flex justify-start items-center text-white gap-3 text-nowrap p-4">
          <p className="text-[18px] font-semibold ">Type :</p>
          {["Question", "Answer", "Users", "Tags"].map((type) => (
            <button
              key={type}
              className="rounded-[40px] px-6 hover:orangeGradient  py-2 bg-[#151821] hover:orangeGradient"
            >
              {type}
            </button>
          ))}
        </div>
        <hr className="border-top border-[#3F4354] w-full border-[0.5px]" />
        <div className="p-4">
          <p className="text-white font-bold text-[18px]">TopMatch</p>
          <div className="py-4 cursor-pointer">
            <a className="flex items-center mt-2 hover:bg-gray-600   text-white font-semibold gap-3">
              <img src={tagSvg} alt="tag" />
              Best practices for data fetching in a Next.js application wit...
            </a>
            <a className="text-[#7B8EC8] font-semibold text-[14px] pl-[34px]">
              Question
            </a>
            <a className="flex items-center mt-2 hover:bg-gray-600  text-white font-semibold gap-3">
              <img src={tagSvg} alt="tag" />
              How do I use express as a custom server in NextJS?
            </a>
            <a className="text-[#7B8EC8] font-semibold text-[14px] pl-[34px]">
              Question
            </a>
            <a className="flex items-center mt-2 hover:bg-gray-600  text-white font-semibold gap-3">
              <img src={tagSvg} alt="tag" />
              Answer containing Next.js
            </a>
            <a className="text-[#7B8EC8] font-semibold text-[14px] pl-[34px]">
              Answer
            </a>
            <a className="flex items-center mt-2 hover:bg-gray-600  text-white font-semibold gap-3">
              <img src={tagSvg} alt="tag" />
              Answer containing Next.js
            </a>
            <a className="text-[#7B8EC8] font-semibold text-[14px] pl-[34px]">
              Answer
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default SearchDropDown;
