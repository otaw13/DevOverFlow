import { cn } from "../lib/utils";
import Biglogo from "../assets/svg/Logo.svg";
import Home from "../assets/svg/Home.svg";
import Star from "../assets/svg/tabler_star.svg";
import Job from "../assets/svg/octicon_briefcase-24.svg";
import LucideTag from "../assets/svg/lucide_tag.svg";
import Community from "../assets/svg/Users Group Two Rounded.svg";
import Question from "../assets/svg/Community.svg";
import Exit from "../assets/svg/Logout 3.svg"

type Props = {
  className?: string;
};

export default function MenuComponent(props: Props) {
  return (
    <aside>
      <div
        className={cn(
          "h-[100vh] flex flex-col items-center fixed z-[10] top-0 left-0 overflow-x-hidden",
          props.className
        )}
      >
        <div className="pl-4 pr-8 pt-10">
          <img src={Biglogo} alt="logo" />
        </div>
        <div className="flex flex-col flex-grow items-center w-full">
          <nav className="flex flex-col gap-2 ml-1 text-white mt-12 ">
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={Home} alt="home" /> Home
            </a>
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={Star} alt="star" /> Collections
            </a>
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={Job} alt="job" /> Find Jobs
            </a>
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={LucideTag} alt="tag" /> Tags
            </a>
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={Community} alt="community" /> Communities
            </a>
            <a
              className="flex gap-3 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
              href="#"
            >
              <img src={Question} alt="question" /> Ask a Question
            </a>
          </nav>
          <a
            className="mt-auto mb-10 text-white flex gap-3 mr-10 text-[18px] py-3 px-4 rounded-[8px] font-semibold hover:bg-gradient-to-r from-[#FF7000] to-[#E2995F]"
            href="#"
          >
            <img src={Exit} alt="logout icon" />
            Logout
          </a>
        </div>
      </div>
    </aside>
  );
}
