import { cn } from "../lib/utils";

type Props = {
  InputTitle: string;
  InputPalceholder: string;
  InputMessage?: string;
  className1?: string;
  className2?:string;
};

export default function InputFieldComponent(props: Props) {
  return (
    <div className={cn("font-semibold", props.className1)}>
      <h3>{props.InputTitle}</h3>
      <input
        type="text"
        className={cn(
          " rounded-[6px] font-normal w-[500px] outline-none p-3",
          props.className2
        )}
        placeholder={props.InputPalceholder}
      />
      <p className="text-[14px] text-[#7B8EC8] font-normal"> {props.InputMessage}</p>
    </div>
  );
}
