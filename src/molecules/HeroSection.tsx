
import OrangeBtn from "@/atoms/OrangeBtn";
import Cards from "@/molecules/Cards";
import Tag from "@/atoms/Tag";
import SearchbarComponent from "@/atoms/SearchBarComponent ";
import imagePath from "@/assets/svg/avatar.svg";


export default function HeroSection() {

    const data = [
      {
        title:
          "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
        img: imagePath,
        usersName: "palonchi1",
        onlineTime: "asked 2 mins ago",
      },
      {
        title:
          "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
        img: imagePath,
        usersName: "palonchi2",
        onlineTime: "asked 5 mins ago",
      },
      {
        title:
          "JavaScript validation for a form stops the form data from being submitted to mysql database",
        img: imagePath,
        usersName: "palonchi3",
        onlineTime: "asked 9 mins ago",
      },
      {
        title:
          "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
        img: imagePath,
        usersName: "palonchi4",
        onlineTime: "asked 1 mins ago",
      },
    ];
    return (
      <section className="overflow-y-scroll h-full max-h-[calc(100vh_-_100px)] pb-10  overflow-x-hidden">
        <div className="flex flex-col mx-auto container gap-y-6">
          <div className="flex mx-auto justify-between items-center pt-10 w-[780px]">
            <h2 className="text-white font-bold text-[30px]">All Questions</h2>
            <OrangeBtn btnTitle="Ask a Question" />
          </div>

          <SearchbarComponent
            placeholder="Search for Questions Here..."
            className="bg-[#0c0e13] max-w-[700px] w-full mx-auto text-white"
            toggle={() => {}}
          />
          <div className="flex min-w-[500px] mx-auto gap-3">
            {["Newest", "Recommended Questions", "Frequent", "Unanswered"].map(
              (tagTitle, idx) => (
                <Tag
                  key={idx}
                  className="bg-[#151821] hover:bg-[#212734] transition-all duration-300 group"
                  TagTitle={tagTitle}
                />
              )
            )}
          </div>

          {data.map((item, idx) => (
            <Cards
              key={idx}
              title={item.title}
              className="bg-[#0F1117] max-w-[800px] mx-auto"
              imageSrc={item.img}
              usersName={item.usersName}
              onlineTime={item.onlineTime}
              votes="1.2k Votes"
              answers="900 Answers"
              views="5.2k Views"
            />
          ))}
        </div>
      </section>
    );
}