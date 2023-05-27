import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinksImg from "../../../assets/menu/drinks.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle";
import MenuCstegory from "../MenuCategory/MenuCstegory";
import { useScrollTop } from "../../../Hooks/useScrollTop";
import { useLocation } from "react-router-dom";
const Menu = () => {
  const { pathname } = useLocation();
  useScrollTop(pathname);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* Main cover */}
      <SectionTitle
        subheading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered */}
      <MenuCstegory items={offered}></MenuCstegory>
      {/* dessert */}
      <MenuCstegory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCstegory>
      {/* pizza */}
      <MenuCstegory items={pizza} title="pizza" img={pizzaImg}></MenuCstegory>
      {/* salad */}
      <MenuCstegory items={salad} title="salad" img={saladImg}></MenuCstegory>
      {/* salad */}
      <MenuCstegory items={soup} title="soup" img={soupImg}></MenuCstegory>
      {/* drinks */}
      <MenuCstegory
        items={drinks}
        title="drinks"
        img={drinksImg}
      ></MenuCstegory>
    </div>
  );
};

export default Menu;
