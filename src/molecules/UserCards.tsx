import Tag from "../atoms/Tag";
import { cn } from "../lib/utils";

type Props = {
  className: string;
  imgSource: string;
  userName: string;
  userId: string;
};

export default function UserCards(props: Props) {

    
  return (
    <div className={cn("rounded-[10px] w-[250px] h-[275px] ", props.className)}>
      <div className="gap-1  flex flex-col justify-center items-center h-full">
        <img src={props.imgSource} alt="pfp" />
        <p className="text-[26px] textColorBright font-bold">
          {props.userName}
        </p>
        <p className="text-[#7B8EC8]">@{props.userId}</p>
        <div className="flex gap-2 mt-3">
          <Tag className="bg-[#212734]" TagTitle="HTML" />
          <Tag className="bg-[#212734]" TagTitle="CSS" />
          <Tag className="bg-[#212734]" TagTitle="PYTHON" />
        </div>
      </div>
    </div>
  );
}
