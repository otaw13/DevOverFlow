import { cn } from "../lib/utils";
type Props ={
    className?:string ;
    btnTitle:string;
}

export default function OrangeBtn(props:Props) {
    return (
      <div>
        <button
          className={cn(
            "rounded-[8px] px-6 py-3  orangeGradient text-white",
            props.className
          )}
        >
          {props.btnTitle}
        </button>
      </div>
    );
}