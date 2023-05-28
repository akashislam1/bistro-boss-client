import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  return (
    <div className="drawer drawer-mobile relative p-4 md:p-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute top-2 right-2"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side overflow-y-auto">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt className="inline-block"></FaCalendarAlt>
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet className="inline-block"></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart className="inline-block"></FaShoppingCart> My Cart
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">add review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">my booking</NavLink>
          </li>
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          {/* <li>
            <NavLink>
              <FaHome to="/contact"></FaHome> Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
