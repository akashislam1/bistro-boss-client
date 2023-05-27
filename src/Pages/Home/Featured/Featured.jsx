import SectionTitle from "../../../components/sectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-28 py-4">
      <div className="text-white">
        <SectionTitle
          subheading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center gap-5 py-10 px-5 md:px-32 bg-slate-900 bg-opacity-40 -full">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="text-white">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            alias officiis tenetur iure facere delectus velit amet odit. Quaerat
            itaque dolorem natus sunt, dolorum obcaecati quas facilis officiis
            sit assumenda ut. Sed praesentium, minus ea fuga sequi
            necessitatibus consequatur vero vitae recusandae cum rem commodi
            odit aliquid mollitia voluptatum numquam!
          </p>
          <button className=" btn btn-outline border-0 text-white border-b-2 border-white rounded-b-lg px-4 mt-3">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
