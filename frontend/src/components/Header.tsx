import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEst.com
        </Link>
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};
export default Header;
