// import "./assets/css/App.css";
// import "./atoms/SearchBarComponent ";
// import SearchbarComponent from "./atoms/SearchBarComponent ";
// import OrangeBtn from "./atoms/OrangeBtn";
// import LocationDropDown from "./atoms/LocationDropDown";
// import Tag from "./atoms/Tag";
// import FilterComponent from "./atoms/FilterComponent";
// import MenuComponent from "./molecules/MenuComponent";
// import Cards from "./molecules/Cards";
// import imagePath from "./assets/svg/avatar.svg";
// import imgPath1 from "./assets/svg/image 10.svg";
// import InputFieldComponent from "./atoms/InputFieldComponent";
// import JobPost from "./molecules/JobPost";
// import Flag from "./assets/svg/AU.svg"
// import Avatar from "./assets/svg/avatarBig.svg"
// import UserCards from "./molecules/UserCards";
// import { useEffect } from "react";
// import TagCards from "./molecules/TagCards";
// import Theme from "./atoms/Theme";
// import Sidebar from "./molecules/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import Pfp from "./assets/svg/Profile-Pic-S.svg"

export default function App() {




  return (
    <div>
      <HomePage imgSource={Pfp} open={false} toggle={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      {/* <SearchbarComponent className="bg-[#212734] w-[500px] " /> */}
      {/* <OrangeBtn btnTitle="Ask a quetion"/> */}
      {/* <LocationDropDown className="bg-[#212734] w-[300px]" /> */}
      {/* <Tag TagTitle={"JAVASCRIPT"} className={"bg-[#212734]"} /> */}
      {/* <FilterComponent
        filterTitle="HighestReputation"
        className="bg-[#212734] w-[200px] text-white"
      /> */}
      {/* <MenuComponent className={"bg-[#0F1117] w-[250px]"} /> */}
      {/* <Sidebar
        className={"bg-[#0F1117] w-[320px] text-white"}
        reftitle1="Would it be appropriate to point out an error in another paper during a referee report?"
        reftitle2="How can an airconditioning machine exist?"
        reftitle3="Interrogated every time crossing UK Border as citizen"
        reftitle4="Low digit addition generator"
        reftitle5="What is an example of 3 numbers that do not make up a vector?"
        QuestionsNum={20000}
      /> */}

      <div className="flex flex-col items-center">
        {/* <Cards
          title="The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this"
          className="bg-[#0F1117]"
          imageSrc={imagePath}
          usersName="Shateesh"
          onlineTime="  asked 2 mins ago"
          votes="1.2k Votes"
          answers="900 Answers"
          views="5.2k Views"
        /> */}
        {/* <InputFieldComponent
          InputTitle="Full Name "
          InputPalceholder="Enter Your Name"
          className1="text-black"
          className2="bg-[#212734] placeholder:text-[#7B8EC8] text-white"
        /> */}

        {/* <JobPost
          imgSrc1={imgPath1}
          className1="bg-[#0f1117] text-white mt-10"
          pClassName="text-white"
          PostTitle="Principal Salesforce Developer"
          PostSubTitle="About the Company Join AT&T and reimagine the communications  and technologies that connect the world."
          jobType="Full-time"
          salary="40k-90k"
          LocationImgSrc={Flag}
          Location="Melbourne, AU"
          divBg="bg-[#212734]"
        /> */}
        {/* <UserCards imgSource={Avatar}
        className="bg-[#0f1117] mt-10 "
        userName="David Ramero"
        userId="bobur_mavlonov"/> */}

        {/* <TagCards
          className="bg-[#0F1117] text-white"
          title="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"
          questions="23493"
        />
        <Theme className="bg-[#151821] text-[#7B8EC8]" /> */}
      </div>
    </div>
  );
}
