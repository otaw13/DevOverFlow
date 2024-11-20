import ProfileComponent from "./ProfileComponent";
import pfp from "@/assets/svg/Ellipse 4.png"


export default function HeroProfileSec() {
    return (
      <section>
        <div className="flex flex-col overflow-y-scroll h-full max-h-[calc(100vh_-_100px)] p-5  container gap-y-6 ">
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
    );
}