import { cn } from "../lib/utils";

type Props = {
  className?: string;
  TagTitle: string;
};

export default function Tag(props: Props) {
  return (
    <button
      id="tag"
      className={cn("  rounded-[8px] px-5 py-2  ", props.className)}
    >
      <span className="group-hover:gradientText text-[#7B8EC8] font-medium text-[12px]">
        {props.TagTitle}
      </span>
    </button>
  );
}
