import Header from "../assets/Component/Header";
import { Link } from "react-router";

const TemplatePage = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <div className="flex justify-center gap-16 pt-10 items-center ">
          <div to="/create-template" className="w-95 h-49.5">
            <h1 className="text-6xl ">
              Select a <span className="text-[#3bb2ae]">Template</span> from the
              list
            </h1>
          </div>
          <Link
            to="/create-template"
            className=" grid grid-cols-3 gap-10 justify-center items-center "
          >
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/template.png"
              alt=""
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/template1.jpg"
              alt=""
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/template2.jpg"
              alt=""
            />

            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="https://www.myperfectresume.com/wp-content/uploads/2023/10/Student-Resume-Example.svg"
            />
            <img
              className="w-49.5 h-74.5 border rounded-xl"
              src="./public/template4.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
