import { cn } from "../lib/utils";
import Tag from "../atoms/Tag";
import Clock from "../assets/svg/clock.svg";
import Coin from "../assets/svg/currency-dollar-circle.svg";

type Props = {
  jobType: string;
  salary: string;
  className1?: string;
  imgSrc1: string;
  pClassName?: string;
  PostTitle: string;
  PostSubTitle: string;
  LocationImgSrc: string;
  Location: string;
  divBg: string;
};

export default function JobPost(props: Props) {
  return (
    <div className={cn("flex p-6 rounded-[8px] gap-10", props.className1)}>
      <div className="w-[65px] h-[65px] rounded-[10px] bg-[#212734]">
        <img src={props.imgSrc1} alt="logo" />
      </div>
      <div>
        <div className="flex flex-col gap-y-2 justify-between w-[700px]">
          <div className="flex items-center">
            <div className="flex gap-5">
              <h2 className="font-semibold text-[18px]">{props.PostTitle}</h2>
              <Tag TagTitle="DEVELOPMENT" className="bg-[#212734]" />
            </div>
            <div
              className={cn(
                "ml-auto rounded-[16px] flex items-center px-3 py-1",
                props.divBg
              )}
            >
              <img className="pr-2" src={props.LocationImgSrc} alt="flag" />
              <p>{props.Location}</p>
            </div>
          </div>
          <p className={cn("max-w-[500px]", props.pClassName)}>
            {props.PostSubTitle}
          </p>
          <div className="flex text-[#7B8EC8] justify-between">
            <div className="flex gap-6">
              <div className="flex  gap-1">
                <img src={Clock} alt="clock icon " />
                <p>{props.jobType}</p>
              </div>
              <div className="flex  gap-1">
                <img src={Coin} alt="coin icon" />
                <p>{props.salary}</p>
              </div>
            </div>
            <button className="a font-semibold">View Job</button>
          </div>
        </div>
      </div>
    </div>
  );
}

