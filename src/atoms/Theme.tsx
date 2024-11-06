import { cn } from "../lib/utils";
import Light from "../assets/svg/Light.svg";
import Dark from "../assets/svg/Dark.svg";
import System from "../assets/svg/ri_computer-fill.svg";

type Props = {
  className?: string;
};

export default function Theme(props: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-[4px] w-[180px] h-auto gap-2",
        props.className
      )}
    >
      <div className="w-full p-3 hover:bg-[#212734] rounded-[4px]">
        <div className="flex items-center gap-3 w-full hover:[filter:invert(52%)_sepia(25%)_saturate(6807%)_hue-rotate(1deg)_brightness(101%)_contrast(109%)]">
          <img src={Light} alt="sun" className="w-6 h-6" />
          <p className="font-semibold text-[20px]">Light</p>
        </div>
      </div>
      <div className="w-full p-3 hover:bg-[#212734] rounded-[4px]">
        <div className="flex items-center gap-3 w-full hover:[filter:invert(52%)_sepia(25%)_saturate(6807%)_hue-rotate(1deg)_brightness(101%)_contrast(109%)]">
          <img src={Dark} alt="moon" className="w-6 h-6" />
          <p className="font-semibold text-[20px]">Dark</p>
        </div>
      </div>
      <div className="w-full p-3 hover:bg-[#212734] rounded-[4px]">
        <div className="flex items-center gap-3 w-full hover:[filter:invert(52%)_sepia(25%)_saturate(6807%)_hue-rotate(1deg)_brightness(101%)_contrast(109%)]">
          <img src={System} alt="screen" className="w-6 h-6" />
          <p className="font-semibold text-[20px]">System</p>
        </div>
      </div>
    </div>
  );
}
