import Magnifier from "../assets/svg/Vector.svg";
import { cn } from "../lib/utils";

type Props = {
  className?: string;
  placeholed: string;
  toggle: () => void;
};

export default function SearchbarComponent(props: Props) {
  return (
    <div className={cn("rounded-[10px] flex px-3", props.className)}>
      <img src={Magnifier} alt="search-icon" />
      <input
        className="placeholder:text-[#7B8EC8] p-3 outline-none rounded-[10px] bg-transparent w-full"
        type="text"
        placeholder={props.placeholed}
        onClick={props.toggle}
      />
    </div>
  );
}
