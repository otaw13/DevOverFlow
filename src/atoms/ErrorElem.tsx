import Illustration from "@/assets/svg/llustration.svg";

export default function ErrorElement() {
  return (
    <section className="relative bg-black w-full h-[100vh] overflow-hidden ">
      <div className="bottom-[-100px] right-[-400px] bg-[#1A1A34] blur-[300px]  absolute w-[550px] h-[400px] opacity-[50%]"></div>
      <div className="top-[-400px] left-[-400px] bg-[#1A1A34] blur-[300px] absolute w-[600px] h-[700px] opacity-[50%]"></div>
      <div className="flex justify-center items-center">
        <img className="" src={Illustration} alt="bg-pic" />
        <h1 className="bg-[#08090b] right-[425px] absolute text-white text-[100px] ">
          404 Error !
        </h1>
      </div>
    </section>
  );
}
