import { MdCloudUpload } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import Footer from "../assets/Component/Footer";
import Header from "../assets/Component/Header";

const CreateTemplate = () => {
  return (
    <div>
      <Header />
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 p-2">
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Personal Details
            </h3>
            <div className=" flex gap-3 items-center">
              <label
                className="flex justify-center gap-3 border border-[#e6e6e6] rounded-xl w-83.5 h-16 items-center"
                htmlFor=""
              >
                <i>
                  <MdCloudUpload />
                </i>
                <p className="text-[#a2a09f]">Select a file</p>
              </label>
              <img
                className="w-14.75 h-14.75 rounded-xl"
                src="./public/avatar.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd] "
                type="text"
                placeholder="Your Name"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                placeholder="Your Summary"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                placeholder="Work Profile"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                placeholder="Address"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="border-2 w-103.5 h-11 rounded-xl p-2 border-[e2e8f0] text-[#97a0b9] font-bold hover:border-[#0d6efd]"
                type="text"
                placeholder="Email id"
              />
            </div>
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Technical Skills
            </h3>
            <input type="text" placeholder="Separate skills by comma" />
            <h3 className="font-bold border-b border-[#cecece] w-103.25 pt-5">
              Education
            </h3>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Education
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Projects</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Projects
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Work Experience</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Experience
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Awards & Achievement</p>
              <button className="relative h-6 w-10.5 rounded-full bg-teal-500">
                <span className="absolute right-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white shadow" />
              </button>
            </div>
            <textarea
              className="border w-103.5 p-2 rounded-xl h-20 border-[#97a0b9] hover:border-[#0d6efd]"
              name=""
              id=""
              placeholder="Use comma to separate Achievement"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 shadow-xl/50 pt-4 border justify-center items-center w-200 p-2 ">
            <h1 className="text-5xl font-bold">Your Name</h1>
            <div className="flex gap-4 items-center justify-center pb-3">
              <div className="flex gap-3 items-center  ">
                <i className="text-[#6c757c]">
                  <ImLocation />
                </i>
                <p className="text-[#d4d7d3] text-xl">Address line</p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
              <div className="flex gap-3 items-center ">
                <i className="text-[#6c757c]">
                  <MdEmail />
                </i>
                <p className="text-[#d4d7d3] text-xl">Email Address</p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
              <div className="flex gap-3 items-center ">
                <i className="text-[#6c757c]">
                  <FaPhone />
                </i>
                <p className="text-[#d4d7d3] text-xl">Phone Number</p>
                <div className="border-r h-7 border-[#d4d7d3]"></div>
              </div>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">TECHNICAL SKILLS</h1>
            </div>
            <div>
              <ul className="flex gap-4 justify-center items-center font-bold text-xl">
                <li className="bg-[#d5e4da] p-2">Your</li>
                <li className="bg-[#d5e4da] p-2">Skills</li>
                <li className="bg-[#d5e4da] p-2">are</li>
                <li className="bg-[#d5e4da] p-2">shown</li>
                <li className="bg-[#d5e4da] p-2">here</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">PROJECTS</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Project Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium">
                <li>Project Description are Shown here</li>
                <li>with Bullet Points</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">EDUCATION</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Education Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium">
                <li>Project Description are Shown here</li>
                <li>with Bullet Points</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">WORK EXPERIENCE</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Work Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium">
                <li>Project Description are Shown here</li>
                <li>with Bullet Points</li>
              </ul>
            </div>
            <div className="bg-[#d1e4e2] flex items-start justify-self-start text-start w-full p-2 ">
              <h1 className="text-2xl font-bold">AWARDS & ACHIEVEMENTS</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">Work Title</h1>
              <ul className="list-disc text-[#1A202C] font-medium">
                <li>Your Awards are shown here</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button className="border border-[#62807e] text-[#40776c] w-17.25 h-10 rounded-xl">
            Print
          </button>
          <button className="border border-[#62807e] text-[#40776c] w-52.75 h-10 rounded-xl">
            Select Another Template
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateTemplate;
