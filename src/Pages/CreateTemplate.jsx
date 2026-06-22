import { MdCloudUpload } from "react-icons/md";
import Footer from "../assets/Component/Footer";
import Header from "../assets/Component/Header";

const CreateTemplate = () => {
  return (
    <div>
      <Header />
      <div>
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
              <span className="bg-[#319795] border rounded-xl"></span>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Projects
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Work Experience</p>
              <span className="bg-[#319795] border rounded-xl"></span>
            </div>
            <button className="border-2 bg-[#309794] w-103.5 h-11 rounded-xl p-2 border-[#309794] text-white font-bold ]">
              Add Experience
            </button>
            <div className="font-bold border-b border-[#cecece] w-103.25 pt-5 flex justify-between pb-3">
              <p>Awards & Achievement</p>
              <span className="bg-[#319795] border rounded-xl"></span>
            </div>
            <textarea
              className="border w-103.5 p-2 rounded-xl h-20 border-[#97a0b9] hover:border-[#0d6efd]"
              name=""
              id=""
              placeholder="Use comma to separate Achievement"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 shadow-xl border justify-center items-center text-center">
            <h1>Your Name</h1>
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
