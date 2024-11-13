import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
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
         

          <header className="flex fixed top-0 w-full z-[2] p-5 bg-[#07080b]">
            <SearchbarComponent
              className="bg-[#0c0e13] w-[500px] mx-auto text-white"
              placeholder="Search anything globally"
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

          <div className="flex flex-col mx-auto text-white container  w-[700px] gap-y-6 pt-32 pb-1">
            <h1 className="text-[30px] font-bold text-white ">Edit Profile</h1>
            <div className="my-4"><p className="py-2 font-semibold">Full Name</p><input type="text" className="rounded-[6px] text-white w-[700px]  outline-none px-6 py-4 bg-[#151821]" /></div>
            <div className="my-5"><p className="py-2 font-semibold">User Name</p><input type="text" className="rounded-[6px] text-white w-[700px] outline-none px-6 py-4 bg-[#151821]" /></div>
            <div className="my-5"><p className="py-2 font-semibold">Portfolio Link</p><input type="text" className="rounded-[6px] text-blue-600  w-[700px] outline-none px-6 py-4 bg-[#151821]" /></div>
            <div className="my-5"><p className="py-2 font-semibold">Location</p><input type="text" className="rounded-[6px] text-white w-[700px] outline-none px-6 py-4 bg-[#151821]" /></div>
            <div className="my-4"><p className="py-2 font-semibold">Bio</p><textarea  className="rounded-[6px] text-white w-[700px] outline-none h-[120px] p-5 resize-none bg-[#151821]" /></div>
            <button className="font-semibold text-white flex ml-auto orangeGradient rounded-[8px] px-10 py-3">Submit</button>
          </div>
        </section>
      </div>

      <SearchDropDown open={isSearchOpen} toggle={toggleSearch} />
    </div>
  );
}
