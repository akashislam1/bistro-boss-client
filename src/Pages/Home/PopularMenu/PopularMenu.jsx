import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-10">
      <SectionTitle
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 p-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="border-b-2 border-black rounded-b-lg px-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
