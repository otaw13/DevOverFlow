import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  className?: string;
  toggle: () => void;
};


export default function SearchDropDown({open, toggle}:Props) {
    return (
      <div
        className={`${
          open ? "flex flex-col" : "hidden"
        } bg-[#212734] w-[500px] height-[500px] rounded-[10px]`}
      >

      </div>
    );
}