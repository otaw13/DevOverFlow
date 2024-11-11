import { cn } from "@/lib/utils";
import PfpAns from "@/assets/svg/PfpAns.svg"
import UP from "@/assets/svg/up.svg"
import code from "@/assets/svg/carbon 1.svg"
type Props = {
    className?:string;
    title:string;
    subtitle:string;
    nickName:string;
    date:string;
}

export default function Answers(props:Props) {
    return (
      <div className={cn("bg-transparent w-[700px]  mx-auto")}>
        <div className="flex justify-between">
          <div className="flex items-center  gap-3 text-[20px] font-semibold">
            <img className="w-[50px] " src={PfpAns} alt="pfp" />
            <p className="text-white">{props.nickName}</p>
            <p className="text-[#7B8EC8] text-[16px]"> •{props.date}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img className="like" src={UP} alt="up arrow" />
            <p className=" w-[20px] text-center flex items-center justify-center h-[20px] text-[12px] text-white rounded-[2px] bg-[#212734]">
              12
            </p>
            <img className="rotate-180 dislike" src={UP} alt="up arrow" />
            <p className="w-[20px] text-center flex items-center justify-center h-[20px] text-[12px] text-white rounded-[2px] bg-[#212734]">
              -4
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[white] ">{props.title}</p>
        </div>
        <div className="mt-5 rounded-[10px] flex justify-center bg-[#101012] w-[700px] h-[200px]">
            <img src={code} alt="code" />
        </div>
        <div className="my-5">
            <p className="text-[#FFF]">{props.subtitle}</p>
        </div>
      </div>
    );
}