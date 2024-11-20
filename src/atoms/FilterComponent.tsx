import { cn } from "../lib/utils";
import FilterIcon from "../assets/svg/bi_filter.svg"
import DorpDownIcon from "../assets/svg/dropdown.svg"

type Props ={
    className?:string
    filterTitle:string;
}

export default function FilterComponent(props:Props) {
    return (
        <button className={cn("rounded-[5px] px-2 py-3 flex justify-around items-center",props.className)}>
            <img src={FilterIcon} alt="filter icon" />
            <p className="text-[14px]  font-semibold">{props.filterTitle}</p>
            <img src={DorpDownIcon} alt="arrow down" />
        </button>
    )
}