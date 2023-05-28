import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">
          <li>
            <Link>
              <FaHome></FaHome>User Home
            </Link>
          </li>
          <li>
            <Link>
              <FaCalendarAlt className="inline-block"></FaCalendarAlt>
              reservation
            </Link>
          </li>
          <li>
            <Link>
              <FaWallet className="inline-block"></FaWallet> Payment History
            </Link>
          </li>
          <li>
            <Link to="/dashboard/mycart">
              <FaShoppingCart className="inline-block"></FaShoppingCart> My Cart
            </Link>
          </li>
          <li>
            <Link>add review</Link>
          </li>
          <li>
            <Link>my booking</Link>
          </li>
          <div className="divider "></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FaBars></FaBars> Menu
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
              <FaShoppingBag></FaShoppingBag> Shop
            </Link>
          </li>
          <li>
            <Link>
              <FaHome></FaHome> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
