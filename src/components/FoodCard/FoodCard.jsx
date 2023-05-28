import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuFoodId: _id,
        image,
        name,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 700,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-[#F3F3F3] shadow rounded-xl relative">
      <img className="rounded-t-xl w-full" src={image} alt="" />
      <p className="bg-black px-3 py-1 absolute top-3 right-4 text-white">
        ${price}
      </p>
      <div className="text-center my-4 space-y-4">
        <h4 className="font-bold">{name}</h4>
        <p className="text-[#151515]">{recipe}</p>
        <button
          onClick={handleAddToCart}
          className="text-[#BB8506] uppercase bg-[#E8E8E8] py-2 px-5 rounded-md border-b-2 duration-300 border-[#BB8506] hover:border-[#BB8506] hover:bg-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
