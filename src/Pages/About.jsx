import Header from "../assets/Component/Header";
import { FaHeart } from "react-icons/fa";


const About = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white ">
      <Header />
      <div className="flex flex-col justify-center items-center p-4 gap-6 ">
        <p className="text-[#a4d1ca] text-3xl font-medium">People love us</p>
        <h1 className="text-[#2c3749] text-5xl font-bold">Resume Builder</h1>
        <p className="text-[#718599]">Build the Resume That Gets You Hired!</p>
        <div className="flex flex-col gap-1 border rounded-2xl border-white shadow-xl p-2 w-160 h-62">
          <img
            className="w-10.25 h-9.25 pl-3"
            src="./public/download-1.png"
            alt=""
          />
          <div className="flex justify-between pl-4 pr-4">
            <p className="text-[#8e939b] w-107.5 h-40">
              A resume builder website is a web-based tool that allows users to
              create and customize a professional resume to their desired
              specifications. These websites typically provide templates for
              creating a resume.
            </p>
            <img
              className="rounded-full w-20 h-20"
              src="./public/profile.jpg"
              alt=""
            />
          </div>
          <p className="text-start pl-3">
            Hardik Desai
            <span className="text-[#848795]"> - Fronted Web Developer</span>
          </p>
        </div>
        <div className="text-5xl text-[#38b2ad] pt-10">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default About;
