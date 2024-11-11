import { cn } from "../lib/utils";
import Tag from "../atoms/Tag";
import Like from "../assets/svg/like.svg";
import AnswerIcon from "../assets/svg/answers.svg";
import ViewsIcon from "../assets/svg/view.svg";

type Props = {
  title: string;
  className?: string;
  views?: string;
  answers?: string;
  votes?: string;
  usersName: string;
  onlineTime: string;
  imageSrc: string;
};

export default function Cards(props: Props) {
  return (
    <div className={cn("rounded-[10px] w-[700px] p-8", props.className)}>
      <div>
        <p className="text-[20px] font-semibold text-white">{props.title}</p>
      </div>
      <div className="flex gap-3 mt-5">
        <Tag TagTitle="JavaScript" className="hover:bg-[#212734] bg-[#151821] group" />
        <Tag TagTitle="REACT-JS" className="hover:bg-[#212734] bg-[#151821] group" />
        <Tag TagTitle="C++" className="hover:bg-[#212734] bg-[#151821] group" />
        <Tag TagTitle="Java" className="hover:bg-[#212734] bg-[#151821] group" />
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="text-white flex items-center justify-between w-1/2">
          <div className="flex items-center gap-3">
            <a className="flex items-center gap-3" href="#">
              <img
                src={props.imageSrc}
                alt="pfp"
                className="w-5 h-5 rounded-full"
              />
              <p className="font-medium ">{props.usersName}</p>
              <p className="text-sm "> • {props.onlineTime}</p>
            </a>
          </div>
        </div>
        <div className="flex items-center text-nowrap text-white gap-2 text-[12px] font-medium">
          <img src={Like} alt="like icon" />
          <p>{props.votes}</p>
          <img src={AnswerIcon} alt=" answers (comment) icon" />
          <p>{props.answers}</p>
          <img src={ViewsIcon} alt="eye (views icon)" />
          <p>{props.views}</p>
        </div>
      </div>
    </div>
  );
}
