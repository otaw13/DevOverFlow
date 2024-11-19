import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import MooN from "@/assets/svg/Dark.svg";
import SearchDropDown from "@/molecules/SearchDropDown";
import Theme from "@/atoms/Theme";
import SearchbarComponent from "@/atoms/SearchBarComponent ";
import ProfileComponent from "@/molecules/ProfileComponent";
import pfp from "@/assets/svg/Ellipse 4.png";

type Props = {
  imgSource: string;
  views?: string;
  answers?: string;
  votes?: string;
};

export default function HomePage(props: Props) {
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
            <SearchDropDown open={isSearchOpen} toggle={toggleSearch} />
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

          <div className="flex flex-col mx-auto container gap-y-6 pt-32">
            <div>
              <ProfileComponent
                userPfp={pfp}
                userName={"Faizan JSM"}
                userID={"faizan"}
                userLink={"jsmastery.pro"}
                userLocation={"Mumbai, India"}
                userRegDate={"May 2023"}
                userBio={
                  "Launch your development career with project-based coaching - showcase your skills with practical development experience and land the coding career of your dreams. Check out jsmastery.pro"
                }
                userQuestions={"156"}
                userAnswers={"101"}
                userGold={"15"}
                userSilver={"23"}
                userBronze={"38"}
                QuestionsNum={"20152"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
