import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import Sidebar from "@/molecules/Sidebar";
import MooN from "@/assets/svg/Dark.svg";
import OrangeBtn from "@/atoms/OrangeBtn";
import Cards from "@/molecules/Cards";
import imagePath from "@/assets/svg/avatar.svg";
import SearchDropDown from "@/molecules/SearchDropDown";
import { useState } from "react";
import SearchbarComponent from "@/atoms/SearchBarComponent ";

type Props = {
  open: boolean;
  toggle: () => void;
  imgSource: string;
};

export default function HomePage(props: Props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const DATA = ["Item1", "Item2", "Item3", "Item4"];
  return (
    <div>
      <section className={cn("bg-black w-full h-full relative")}>
        <div className="absolute bg-white blur-[250px] top-[200px] z-[1] left-[-200px] w-[200px] h-[200px]"></div>
        <MenuComponent className="bg-[#0F1117] w-[250px]" />
        <Sidebar
          className="bg-[#07080b] w-[300px] text-white mt-[88px]"
          reftitle1="Would it be appropriate to point out an error in another paper during a referee report?"
          reftitle2="How can an airconditioning machine exist?"
          reftitle3="Interrogated every time crossing UK Border as citizen"
          reftitle4="Low digit addition generator"
          reftitle5="What is an example of 3 numbers that do not make up a vector?"
          QuestionsNum={20000}
        />
        <header className="flex fixed top-0 w-full z-[2] p-5 bg-[#07080b]">
          <SearchbarComponent
            className="bg-[#212734] w-[500px] mx-auto text-white"
            placeholed="Search anything globally"
            toggle={toggle} 
          />
          <button>
            <img className="px-5" src={MooN} alt="dark-mode" />
          </button>
          <img src={props.imgSource} alt="pfp" />
        </header>
        <div className="flex flex-col mx-auto container gap-y-6">
          <div className="flex mx-auto justify-between items-center pt-10 w-[780px]">
            <h2 className="text-white font-bold text-[30px]">All Questions</h2>
            <OrangeBtn btnTitle="Ask a Question" />
          </div>
          <SearchbarComponent
            placeholed="Search for Questions Here..."
            className="bg-[#212734] w-[780px] mx-auto text-white"
            toggle={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          {DATA.map((_, index) => (
            <Cards
              key={index}
              title="The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this"
              className="bg-[#0F1117] mx-auto"
              imageSrc={imagePath}
              usersName="Shateesh"
              onlineTime="asked 2 mins ago"
              votes="1.2k Votes"
              answers="900 Answers"
              views="5.2k Views"
            />
          ))}
          <SearchDropDown open={open} toggle={toggle} />
        </div>
      </section>
    </div>
  );
}
