import Avatar from "@/assets/svg/avatar.svg";
import UP from "@/assets/svg/up.svg";
import Like from "@/assets/svg/like.svg";
import AnswerIcon from "@/assets/svg/answers.svg";
import ViewsIcon from "@/assets/svg/view.svg";
import Code from "@/assets/svg/carbon 2.svg";
import Tag from "./Tag";
import FilterComponent from "./FilterComponent";

export default function Question() {
  return (
    <div className="mx-auto">
      <div className="pb-5">
        <div className="flex justify-between w-[700px]">
          <a className="flex items-center gap-3" href="#">
            <img src={Avatar} alt="pfp" className="w-5 h-5 rounded-full" />
            <p className="font-medium text-white">Sateesh</p>
          </a>
          <div className="flex items-center gap-2 ">
            <img className="like" src={UP} alt="up arrow" />
            <p className=" w-[20px] text-center flex items-center justify-center h-[20px] text-[12px] text-white rounded-[2px] bg-[#212734]">
              12
            </p>
            <img className="rotate-180 dislike" src={UP} alt="up arrow" />
            <p className="w-[20px] text-center flex items-center justify-center h-[20px] text-[12px] text-white rounded-[2px] bg-[#212734]">
              -4
            </p>
          </div>
        </div>
      </div>
      <p className="text-[24px] pb-5 font-semibold text-white max-w-[700px] mx-auto text-left">
        How to refresh all the data inside the Datatable and move the data into
        original place after closing the modal popup close button
      </p>
      <div className="mx-auto w-[700px]">
        <div className="flex   items-center text-nowrap text-white gap-2 text-[12px] font-medium">
          <img src={Like} alt="like icon" />
          <p>Asked 2 days ago</p>
          <img src={AnswerIcon} alt=" answers (comment) icon" />
          <p>900 Answers</p>
          <img src={ViewsIcon} alt="eye (views icon)" />
          <p>5.2k Views</p>
        </div>
        <div>
          <p className="mt-7 text-[#DCE3F1] ">
            When the user clicks a button for the first time, a spinner is
            displayed, the "close" button is disabled, and a modal popup is
            shown. When the user clicks on a table displayed within the modal
            popup, the table loads data.
          </p>
          <p className="mt-7 text-[#DCE3F1]">
            When the user closes the popup by clicking the "close" button, and
            then clicks the same button again without refreshing the page, the
            data in the table should be the same as it was before.
          </p>
          <p className="mt-7 text-[#DCE3F1]">
            I need it so that when the user clicks the button, any changes made
            stay in place even after closing and reopening the popup.
          </p>
        </div>
      </div>
      <div className="mt-5 rounded-[10px] flex justify-center bg-[#101012] w-[700px] h-[400px]">
        <img src={Code} alt="code" />
      </div>
      <div className="mt-7 flex gap-3">
        {["JavaScript", "ReactJS", "Invalid Fields", "Deployment"].map(
          (tagTitle) => (
            <Tag
              key={tagTitle}
              className="bg-[#151821]  hover:bg-[#212734] transition-all duration-300 group"
              TagTitle={tagTitle}
            />
          )
        )}
      </div>
      <div className="mt-7 flex justify-between items-center">
        <p className="gradientText font-semibold text-[18px]">138 Answers</p>
        <FilterComponent
          filterTitle="HighestReputation"
          className="bg-[#212734] w-[200px] text-white"
        />
      </div>
    </div>
  );
}
