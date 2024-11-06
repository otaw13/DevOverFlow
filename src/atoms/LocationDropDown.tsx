import { cn } from "../lib/utils"
import Location from "../assets/svg/carbon_location.svg"
import DropDownIcon from "../assets/svg/dropdown.svg"
type Props ={
    className?:string
}

export default function LocationDropDown(props:Props) {
    return (
      <div className={cn("rounded-[10px] flex justify-between items-center p-3", props.className)}>
        <div className="flex gap-2">
          <img src={Location} alt="location icon" />
          <p className="text-[#7B8EC8]">Select Location</p>
        </div>
        <img src={DropDownIcon} alt="drop down arrow down" />

      </div>
    );
}