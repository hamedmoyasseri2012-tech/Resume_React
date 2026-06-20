import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex">
      <div className="w-11 h-11 bg-[#edf2f6]">
        <img src="./public/download.png" alt="" />
      </div>
      <div>
        <Link to="/Home"></Link>
      </div>
      <div>
        <Link to="/About"></Link>
      </div>
    </div>
  );
};

export default Header;
