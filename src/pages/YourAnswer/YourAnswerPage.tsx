import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import Sidebar from "@/molecules/Sidebar";
import MooN from "@/assets/svg/Dark.svg";
import SearchDropDown from "@/molecules/SearchDropDown";
import Theme from "@/atoms/Theme";
import SearchbarComponent from "@/atoms/SearchBarComponent ";
import Answers from "@/molecules/Answers";

import Question from "@/atoms/Question";
import Textarea from "@/atoms/Textarea";

type Props = {
  imgSource: string;
  views?: string;
  answers?: string;
  votes?: string;
};

export default function YourAnswerPage(props: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevOpen) => !prevOpen);
  };

  const toggleTheme = () => {
    setIsThemeOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest(".theme-dropdown") && isThemeOpen) {
        setIsThemeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeOpen]);

  return (
    <div className="bg-black">
      <div className={`${isSearchOpen ? "opacity-90" : "opacity-1"}`}>
        <section className={cn("bg-black w-full h-full relative")}>
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
              className="bg-[#0c0e13] w-[500px] mx-auto text-white"
              placeholed="Search anything globally"
              toggle={toggleSearch}
            />
            <button onClick={toggleTheme}>
              <img className="px-5" src={MooN} alt="dark-mode" />
            </button>
            <img src={props.imgSource} alt="pfp" />
          </header>

          {isThemeOpen && (
            <div className="theme-dropdown absolute top-16 right-0 z-10">
              <Theme
                className="bg-[#151821] text-[#7B8EC8]"
                open={isThemeOpen}
              />
            </div>
          )}

          <div className="flex flex-col mx-auto container gap-y-6 pt-32">
            <Question />
            <Answers
              title="I think what you want to do is probably not to attach the foreach function to only the one array you have here, but to make it work for all arrays. 
              To do that, you must edit the Array prototype (something that some people have very strong opinions about, because you can not protect against potential future namespace collisions - but other people find extremely useful). "
              subtitle="*N.B. to avoid conflict with existing forEach functions (https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach) I have named the function myForEach which I expect to be safe from conflict."
              date=" answered Aug 6, 2022 at 21:01"
              nickName="Philip Martin"
            />
            <hr className="border-top border-[#3F4354] mx-auto border-[0.5px] w-[700px]" />
            <Textarea className="bottom-[150px]" />
          </div>
        </section>
      </div>

      <SearchDropDown open={isSearchOpen} toggle={toggleSearch} />
    </div>
  );
}
