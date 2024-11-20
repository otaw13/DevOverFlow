import { useState, useEffect } from "react";
import MenuComponent from "@/molecules/MenuComponent";
import Header from "@/atoms/Header";
import HeroProfileSec from "@/molecules/HeroProfileSec";
import Pfp from "@/assets/svg/Profile-Pic-S.svg";

type Props = {
  imgSource: string;
  views?: string;
  answers?: string;
  votes?: string;
};

export default function Profile(props: Props) {
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
          <Header imgSource={Pfp} />

          <div className="flex flex-1">
            <div className="flex-1 p-4 ">
              <HeroProfileSec />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
