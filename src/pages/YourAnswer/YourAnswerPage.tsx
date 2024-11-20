import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import Sidebar from "@/molecules/Sidebar";
import MooN from "@/assets/svg/Dark.svg";
import SearchDropDown from "@/molecules/SearchDropDown";
import Theme from "@/atoms/Theme";
import SearchbarComponent from "@/atoms/SearchBarComponent ";
import Answers from "@/molecules/Answers";
import pfp from "@/assets/svg/Profile-Pic-S.svg";

import Question from "@/atoms/Question";
import Textarea from "@/atoms/Textarea";
import Header from "@/atoms/Header";
import HeroUserAnsSec from "@/molecules/HeroUserAnsSec";

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
    <div
      className={`${
        isSearchOpen ? "opacity-90" : "opacity-100"
      } h-screen w-screen  overflow-hidden`}
    >
      <div className="flex h-full w-full bg-black">
        <div className="h-full w-full max-w-[250px] bg-[#0F1117]">
          <MenuComponent />
        </div>

        <div className="flex flex-1 flex-col h-full">
          <Header imgSource={pfp} />

          <div className="flex flex-1">
            <div className="flex-1 p-4 ">
              <HeroUserAnsSec />
            </div>

            <div className="h-full w-full max-w-[300px] bg-[#07080b] text-white ">
              <Sidebar
                reftitle1="Would it be appropriate to point out an error in another paper during a referee report?"
                reftitle2="How can an airconditioning machine exist?"
                reftitle3="Interrogated every time crossing UK Border as citizen"
                reftitle4="Low digit addition generator"
                reftitle5="What is an example of 3 numbers that do not make up a vector?"
                QuestionsNum={20000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
