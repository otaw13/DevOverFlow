import { useState, useEffect } from "react";
import MenuComponent from "@/molecules/MenuComponent";
import pfp from "@/assets/svg/Profile-Pic-S.svg";

import Header from "@/atoms/Header";

type Props = {
  imgSource: string;
  views?: string;
  answers?: string;
  votes?: string;
};

export default function ProfileEditPage(props: Props) {
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
              <div className="flex flex-col  text-white container overflow-y-scroll h-full max-h-[calc(100vh_-_100px)] pb-10  gap-y-6 p-5">
                <h1 className="text-[30px] font-bold text-white ">
                  Edit Profile
                </h1>
                <div className="my-4">
                  <p className="py-2 font-semibold">Full Name</p>
                  <input
                    type="text"
                    className="rounded-[6px] text-white w-[700px]  outline-none px-6 py-4 bg-[#151821]"
                  />
                </div>
                <div className="my-5">
                  <p className="py-2 font-semibold">User Name</p>
                  <input
                    type="text"
                    className="rounded-[6px] text-white w-[700px] outline-none px-6 py-4 bg-[#151821]"
                  />
                </div>
                <div className="my-5">
                  <p className="py-2 font-semibold">Portfolio Link</p>
                  <input
                    type="text"
                    className="rounded-[6px] text-blue-600  w-[700px] outline-none px-6 py-4 bg-[#151821]"
                  />
                </div>
                <div className="my-5">
                  <p className="py-2 font-semibold">Location</p>
                  <input
                    type="text"
                    className="rounded-[6px] text-white w-[700px] outline-none px-6 py-4 bg-[#151821]"
                  />
                </div>
                <div className="my-4">
                  <p className="py-2 font-semibold">Bio</p>
                  <textarea className="rounded-[6px] text-white w-[700px] outline-none h-[120px] p-5 resize-none bg-[#151821]" />
                </div>
                <button className="font-semibold text-white flex ml-auto orangeGradient rounded-[8px] px-10 py-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
