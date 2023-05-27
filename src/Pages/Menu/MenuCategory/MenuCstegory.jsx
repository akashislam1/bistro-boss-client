import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCstegory = ({ items, title, img }) => {
  return (
    <div className="my-20">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 p-4 mt-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to={`/order/${title}`}>
          <button className="border-b-2 hover:bg-black hover:text-white duration-500 border-black rounded-b-lg px-4 py-2">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCstegory;
