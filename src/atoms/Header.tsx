import { cn } from "@/lib/utils";
import SearchDropDown from "@/molecules/SearchDropDown";
import SearchbarComponent from "./SearchBarComponent ";
import Theme from "./Theme";
import { useState, useEffect } from "react";
import MooN from "@/assets/svg/Dark.svg";

type Props = {
imgSource:string;
}

export default function Header(props:Props) {
     const [isSearchOpen, setIsSearchOpen] = useState(false);

     const toggleSearch = () => {
       setIsSearchOpen((prevOpen) => !prevOpen);
     };

const [isThemeOpen, setIsThemeOpen] = useState(false);

const toggleTheme = () => {
  setIsThemeOpen((prevOpen) => !prevOpen);

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

};

    return (
      <div>
        <header className="flex  w-full max-w-[100vw] p-5 bg-[#07080b]">
          <SearchbarComponent
            className="bg-[#0c0e13] max-w-[500px] w-full mx-auto text-white"
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
            <Theme className="bg-[#151821] text-[#7B8EC8]" open={isThemeOpen} />
          </div>
        )}
        <SearchDropDown open={isSearchOpen} toggle={toggleSearch} />
      </div>
    );
}