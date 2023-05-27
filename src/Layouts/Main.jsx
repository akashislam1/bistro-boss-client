import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isHeaderFooter =
    location?.pathname.includes("/login") ||
    location?.pathname.includes("/signup");
  return (
    <div className="max-w-screen-xl mx-auto">
      {isHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
