import { cn } from "@/lib/utils";
import pfp from "@/assets/svg/Ellipse 4.png";
import Link from "@/assets/svg/lucide_link.svg";
import Location from "@/assets/svg/ep_location.svg";
import Callendar from "@/assets/svg/solar_calendar-outline.svg";
import Gold from "@/assets/svg/Gold Medal.svg";
import Silver from "@/assets/svg/Silver Medal.svg";
import Bronze from "@/assets/svg/Bronze Medal.svg";
import Cards from "./Cards";
import imagePath from "@/assets/svg/avatar.svg";
import Tag from "@/atoms/Tag";


type Props = {
  className?: string;
  userName: string;
  userID: string;
  userLink: string;
  userLocation: string;
  userRegDate: string;
  userBio: string;
  userPfp: string;
  userQuestions: string;
  userAnswers: string;
  userGold: string;
  userSilver: string;
  userBronze: string;
  QuestionsNum: string;
};

const DATA = ["Item1", "Item2", "Item3"];

export default function ProfileComponent(props: Props) {
  return (
    <div
      className={cn(
        "p-10 relative  text-white",
        props.className
      )}
    >
      <div className="flex gap-5 items-center">
        <div className="min-w-[150px]">
          <img src={pfp} alt="profile-photo big" />
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[30px] font-bold">{props.userName}</h2>
          <p>@{props.userID}</p>
          <div className="flex gap-x-5">
            <a className="flex gap-1 hover:text-blue-400 items-center" href="#">
              <img src={Link} alt="" />
              {props.userLink}
            </a>
            <a className="flex gap-1 items-center" href="#">
              <img src={Location} alt="" />
              {props.userLocation}
            </a>
            <a className="flex gap-1 items-center" href="#">
              <img src={Callendar} alt="" />
              Joined {props.userRegDate}
            </a>
          </div>
          <p className="w-[700px]">{props.userBio}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 w-full text-nowrap -mx-[calc((60vw-850px)/2)]">
        <h2 className="text-[20px] font-semibold">Stats</h2>
        <div className="flex gap-6 w-full">
          <div className="flex  w-[257px] rounded-[6px] py-6 border border-[#151821] px-11 bg-[#0F1117]">
            <div className="flex gap-6 items-center justify-center">
              <div className="flex-col">
                <p className="font-semibold">{props.userQuestions}</p>
                <p>Questions</p>
              </div>
              <div>
                <p className="font-semibold">{props.userAnswers}</p>
                <p>Answers</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center w-[257px] rounded-[6px] py-6 border border-[#151821] px-11 bg-[#0F1117]">
            <img src={Gold} alt="gold badge" />
            <div className="flex flex-col">
              <p className="font-semibold">{props.userGold}</p>
              <p>Gold Badges</p>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center rounded-[6px] py-6 border border-[#151821] px-11 bg-[#0F1117]">
            <img src={Silver} alt="gold badge" />
            <div className="flex flex-col">
              <p className="font-semibold">{props.userGold}</p>
              <p>Gold Badges</p>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center rounded-[6px] py-6 border border-[#151821] px-11 bg-[#0F1117]">
            <img src={Bronze} alt="gold badge" />
            <div className="flex flex-col">
              <p className="font-semibold">{props.userGold}</p>
              <p>Gold Badges</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 gap-8 flex flex-col">
        <h2 className="font-semibold text-[24px]">Top Posts</h2>
        {DATA.map((_, index) => (
          <Cards
            key={index}
            title="The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this"
            className="bg-[#0F1117] "
            imageSrc={imagePath}
            usersName="Shateesh"
            onlineTime="asked 2 mins ago"
            votes="1.2k Votes"
            answers="900 Answers"
            views="5.2k Views"
          />
        ))}
      </div>
      <div className="mt-10 w-[300px] absolute top-[405px] right-[20px]">
        <h2 className="text-[20px] font-semibold">Top Tags</h2>
        <div className="flex  flex-col gap-y-5 mt-8 ">
          <div className="w-full flex  gap-28 items-center  ">
            <Tag
              TagTitle="JavaScript"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={js} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag
              TagTitle="Next.js"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={ts} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag
              TagTitle="React.js"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={three} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag
              TagTitle="Node.js"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={tw} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag
              TagTitle="Python"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={react} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
          <div className="w-full flex  gap-28 items-center">
            <Tag
              TagTitle="MC Azure"
              className="bg-[#151821] group hover:bg-[#212734]"
            />
            {/* <img src={react} alt="lang-logo" /> */}
            <p className="ml-auto font-medium">+{props.QuestionsNum}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[70%] my-10 ">
        <button className="px-10 text-[18px] py-3 rounded-[8px] font-semibold orangeGradient">
          Load More
        </button>
      </div>
    </div>
  );
}
