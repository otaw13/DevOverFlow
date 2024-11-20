import { useState } from "react";
import { cn } from "@/lib/utils";
import MenuComponent from "@/molecules/MenuComponent";
import Sidebar from "@/molecules/Sidebar";
import HeroSection from "@/molecules/HeroSection";
import imagePath from "@/assets/svg/avatar.svg";
import Header from "@/atoms/Header";
import pfp from "@/assets/svg/Profile-Pic-S.svg";

type Props = {
  imgSource: string;
};

export default function HomePage(props: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prevOpen) => !prevOpen);
  };

  // const DATA = ["Item1", "Item2", "Item3", "Item4"];

  const data = [
    {
      title: "blabla1",
      img: imagePath,
      usersName: "palonchi1",
      onlineTime: "asked 2 min",
    },
    {
      title: "blabla2",
      img: imagePath,
      usersName: "palonchi2",
      onlineTime: "asked 5 min",
    },
    {
      title: "blabla3",
      img: imagePath,
      usersName: "palonchi3",
      onlineTime: "asked 9 min",
    },
    {
      title: "blabla4",
      img: imagePath,
      usersName: "palonchi4",
      onlineTime: "asked 1 min",
    },
  ];

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
              <HeroSection />
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
