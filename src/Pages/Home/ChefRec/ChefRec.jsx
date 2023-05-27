import SectionTitle from "../../../components/sectionTitle";
import img1 from "../../../assets/home/Chef/img1.png";

const ChefRec = () => {
  return (
    <div className="my-10 p-4">
      <SectionTitle
        subheading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-[#F3F3F3] shadow rounded-xl">
          <img className="rounded-t-xl" src={img1} alt="" />
          <div className="text-center my-4 space-y-4">
            <h4 className="font-bold">Caeser Salad</h4>
            <p className="text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
            </p>
            <button className="text-[#BB8506] uppercase bg-[#E8E8E8] py-2 px-5 rounded-md border-b-2 duration-300 border-[#BB8506] hover:border-none hover:bg-black">
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3] shadow rounded-xl">
          <img className="rounded-t-xl" src={img1} alt="" />
          <div className="text-center my-4 space-y-4">
            <h4 className="font-bold">Caeser Salad</h4>
            <p className="text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
            </p>
            <button className="text-[#BB8506] uppercase bg-[#E8E8E8] py-2 px-5 rounded-md border-b-2 duration-300 border-[#BB8506] hover:border-none hover:bg-black">
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3] shadow rounded-xl">
          <img className="rounded-t-xl" src={img1} alt="" />
          <div className="text-center my-4 space-y-4">
            <h4 className="font-bold">Caeser Salad</h4>
            <p className="text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.
            </p>
            <button className="text-[#BB8506] uppercase bg-[#E8E8E8] py-2 px-5 rounded-md border-b-2 duration-300 border-[#BB8506] hover:border-none hover:bg-black">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRec;
