import { cn } from "../lib/utils";
import Tag from "../atoms/Tag";

type Props = {
  className?: string;
  title: string;
  questions: string;
};

export default function TagCards(props:Props) {
  return (
    <div
      className={cn(
        "rounded-[10px] flex flex-col p-8 max-w-[300px] gap-2",
        props.className
      )}
    >
      <Tag className="bg-[#212734] mr-auto text-white text-[16px]" TagTitle="JavaScript" />
      <p className="mt-3">{props.title}</p>
      <div className="flex gap-3">
        <p className="font-semibold a">{props.questions} + </p>
        <p className="text-[#7B8EC8] font-medium"> Questions</p>
      </div>
    </div>
  );
}
