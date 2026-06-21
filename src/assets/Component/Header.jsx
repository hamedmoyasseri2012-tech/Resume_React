import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex w-full bg-[#edf2f6] h-16 justify-between items-center pt-2 pl-4 pr-4 pb-2">
      <div className="w-11 h-11 ">
        <img src="./public/download.png" alt="" />
      </div>
      <div className="flex gap-2 text-[#43322f] font-medium">
        <div>
          <Link to="/Home">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
