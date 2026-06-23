import { Link } from "react-router";
import { IoMdMoon } from "react-icons/io";
import { PiSunDimLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex w-full bg-[#edf2f6] h-16 justify-between items-center pt-2 pl-4 pr-6 pb-2 dark:bg-[#171a23] dark:text-[#cfccd3]">
      <div className="w-11 h-11 ">
        <img src="./public/download.png" alt="" />
      </div>
      <div className="flex gap-6 text-[#43322f] font-medium ">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <button className=" dark:bg-[<PiSunDimLight />]">
          <IoMdMoon />
        </button>
      </div>
    </div>
  );
};

export default Header;
