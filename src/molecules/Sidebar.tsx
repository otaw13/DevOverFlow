import { cn } from "../lib/utils";
import arrow from "../assets/svg/arrowRight.svg";
import Tag from "../atoms/Tag";

type Props = {
  className?: string;
  QuestionsNum?: any;
  reftitle1: string;
  reftitle2: string;
  reftitle3: string;
  reftitle4: string;
  reftitle5: string;
};

export default function Sidebar(props: Props) {
  return (
    <aside
      className={cn(
        "h-[100vh] px-7 pt-3 flex flex-col items-center w-full max-w-[300px] overflow-hidden",
        props.className
      )}
    >
      <div>
        <h2 className="text-[20px] font-bold">Hot Network</h2>
        <div className="text-[14px] mt-5 font-medium flex  flex-col gap-y-5">
          <a
            className="flex  hover:[filter:invert(57%)_sepia(80%)_saturate(235%)_hue-rotate(187deg)_brightness(86%)_contrast(83%)]"
            href="#"
          >
            {props.reftitle1}
            <img className="my-auto pl-3" src={arrow} alt="chevronright" />
          </a>
          <a
            className="flex hover:[filter:invert(57%)_sepia(80%)_saturate(235%)_hue-rotate(187deg)_brightness(86%)_contrast(83%)]"
            href="#"
          >
            {props.reftitle2}
            <img className="my-auto pl-3" src={arrow} alt="chevronright" />
          </a>
          <a
            className="flex  justify-start hover:[filter:invert(57%)_sepia(80%)_saturate(235%)_hue-rotate(187deg)_brightness(86%)_contrast(83%)]"
            href="#"
          >
            {props.reftitle3}
            <img className="my-auto pl-3" src={arrow} alt="chevronright" />
          </a>
          <a
            className="w-full flex hover:[filter:invert(57%)_sepia(80%)_saturate(235%)_hue-rotate(187deg)_brightness(86%)_contrast(83%)]"
            href="#"
          >
            {props.reftitle4}
            <img
              className="my-auto ml-auto pl-3"
              src={arrow}
              alt="chevronright"
            />
          </a>
          <a
            className="flex  hover:[filter:invert(57%)_sepia(80%)_saturate(235%)_hue-rotate(187deg)_brightness(86%)_contrast(83%)]"
            href="#"
          >
            {props.reftitle5}
            <img
              className="my-auto  ml-auto pl-3"
              src={arrow}
              alt="chevronright"
            />
          </a>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-[20px] font-bold">Popular Tags</h2>
        <div className="flex  flex-col gap-y-5 mt-5 ">
          <div className="w-full flex  gap-28 items-center  ">
            <Tag TagTitle="JavaScript" className="bg-[#151821] group hover:bg-[#212734]" />
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag TagTitle="Next.js" className="bg-[#151821] group hover:bg-[#212734]" />
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag TagTitle="React.js" className="bg-[#151821] group hover:bg-[#212734]" />
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag TagTitle="Node.js" className="bg-[#151821] group hover:bg-[#212734]" />
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          
          
        </div>
      </div>
    </aside>
  );
}
