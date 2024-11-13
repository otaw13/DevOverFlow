import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import Sidebar from "@/molecules/Sidebar";
import MooN from "@/assets/svg/Dark.svg";
import OrangeBtn from "@/atoms/OrangeBtn";
import Cards from "@/molecules/Cards";
import imagePath from "@/assets/svg/avatar.svg";
import SearchDropDown from "@/molecules/SearchDropDown";
import Theme from "@/atoms/Theme"
import Tag from "@/atoms/Tag";
import SearchbarComponent from "@/atoms/SearchBarComponent ";

type Props = {
  imgSource: string;
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
    const handleClickOutside = (event:MouseEvent) => {
      if (!event.target.closest(".theme-dropdown") && isThemeOpen) {
        setIsThemeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeOpen]);

  const DATA = ["Item1", "Item2", "Item3", "Item4"];

  return (
    <div>
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

          <div className="flex flex-col mx-auto container gap-y-6">
            <div className="flex mx-auto justify-between items-center pt-10 w-[780px]">
              <h2 className="text-white font-bold text-[30px]">
                All Questions
              </h2>
              <OrangeBtn btnTitle="Ask a Question" />
            </div>

            <SearchbarComponent
              placeholder="Search for Questions Here..."
              className="bg-[#0c0e13] w-[780px] mx-auto text-white"
              toggle={() => {}}
            />
            <div className="flex min-w-[500px] mx-auto gap-3">
              {[
                "Newest",
                "Recommended Questions",
                "Frequent",
                "Unanswered",
              ].map((tagTitle) => (
                <Tag
                  key={tagTitle}
                  className="bg-[#151821] hover:bg-[#212734] transition-all duration-300 group"
                  TagTitle={tagTitle}
                />
              ))}
            </div>

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
          </div>
        </section>
      </div>

      <SearchDropDown open={isSearchOpen} toggle={toggleSearch} />
    </div>
  );
}
