import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 700,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-full h-full mt-10">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        subheading={"Whats new ?"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <div className="bg-[#F3F3F3] w-9/12 mx-auto p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-4">
            <h4>Recipe name*</h4>
            <input
              className="w-full py-3 px-5 bg-white rounded-md"
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4>Category*</h4>
              <select
                defaultValue="Category"
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-x"
              >
                <option disabled>Category</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="salad">Salad</option>
                <option value="dessert">Dessert</option>
                <option value="desi">Desi</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div>
              <h4>Price*</h4>
              <input
                className="input input-bordered w-full max-w-x"
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="mb-4">
            <h4>Recipe Details*</h4>
            <textarea
              className="textarea w-full"
              placeholder="Recipe name"
              {...register("recipe", { required: true, maxLength: 80 })}
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              {...register("image", { required: true })}
            />
          </div>

          <input type="submit" value="Add Item" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
