import textarea from "@/assets/svg/TextArea.svg";
import stars from "@/assets/svg/Frame.svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Textarea(props: Props) {
  return (
    <div className="relative w-[700px] mx-auto">
      <div className="flex justify-between items-center w-[700px] mb-5 mx-auto mt-10 ">
        <h2 className="text-[20px] text-white font-semibold">
          Write your answer here
        </h2>
        <button className=" text-white flex items-center rounded-[5px] px-[16px] py-[10px] gap-2 bg-[#151821] group">
          <img src={stars} alt="ai stars" />
          <span className="group-hover:gradientText">Generate AI Answer</span>
        </button>
      </div>
      <div className="mb-16">
        <img className="mx-auto " src={textarea} alt="text-area" />
        <textarea
          className={cn(
            "resize-none  w-[700px] h-[175px] text-white p-5 outline-none bg-transparent  absolute  left-[0px]",
            props.className
          )}
          autoCorrect="on"
          autoComplete="on"
          name="askaquestion"
        ></textarea>
        <button className="flex mt-10  orangeGradient px-[32px] text-white  font-semibold py-[12px] rounded-[8px] ml-auto ">
          Post Answer
        </button>
      </div>
    </div>
  );
}
