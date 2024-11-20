import Question from "@/atoms/Question";
import Answers from "./Answers";

export default function HeroAnsSection() {
    return (
      <section>
        <div className="flex flex-col overflow-y-scroll h-full max-h-[calc(100vh_-_100px)] pb-10 mx-auto container gap-y-6 mt-10">
          <Question />
          <Answers
            title="I think what you want to do is probably not to attach the foreach function to only the one array you have here, but to make it work for all arrays. 
              To do that, you must edit the Array prototype (something that some people have very strong opinions about, because you can not protect against potential future namespace collisions - but other people find extremely useful). "
            subtitle="*N.B. to avoid conflict with existing forEach functions (https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach) I have named the function myForEach which I expect to be safe from conflict."
            date=" answered Aug 6, 2022 at 21:01"
            nickName="Philip Martin"
          />
          <hr className="border-top border-[#3F4354] mx-auto border-[0.5px] w-[700px]" />
          <Answers
            title="I think what you want to do is probably not to attach the foreach function to only the one array you have here, but to make it work for all arrays. 
              To do that, you must edit the Array prototype (something that some people have very strong opinions about, because you can not protect against potential future namespace collisions - but other people find extremely useful). "
            subtitle=""
            date=" answered Aug 6, 2022 at 21:01"
            nickName="Philip Martin"
          />
        </div>
      </section>
    );
}