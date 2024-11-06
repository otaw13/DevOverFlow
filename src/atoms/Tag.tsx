import { cn } from "../lib/utils";

type Props = {
  className?: string;
  TagTitle: string;
};

export default function Tag(props: Props) {



  return (
    <button id="tag"
      className={cn("text-[#7B8EC8] text-[12px]  rounded-[8px] px-5 py-2 font-medium ", props.className)}
    >
      {props.TagTitle}
    </button>
  );
}
