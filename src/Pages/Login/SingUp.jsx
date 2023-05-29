import { Link, useNavigate } from "react-router-dom";
import loginbg from "../../assets/others/authentication.png";
import img1 from "../../assets/others/authentication1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
const SingUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    // console.log(email, password, name, photoUrl);
    createUser(email, password)
      .then((result) => {
        const signedUpUser = result.user;
        // update user profile
        updateUserProfile(signedUpUser, name, photoUrl)
          .then(() => {
            const saveUser = { name: name, email: email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((err) => {
            setError(err.message);
          });

        navigate("/");
        e.target.reset();
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      ;
      <div style={{ background: `url(${loginbg})` }} className="md:py-32">
        <div className="w-full md:w-3/4 mx-auto flex flex-col-reverse md:flex-row-reverse justify-center items-center shadow-2xl">
          <div>
            <img className="w-96" src={img1} alt="" />
          </div>
          <div className="p-5">
            <div className="flex justify-center items-center ">
              <form
                onSubmit={handleSubmit}
                className="w-full sm:w-80 p-6 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                {error && <span className="text-red-500"> {error}</span>}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name<span className="font-extrabold text-red-500"> *</span>
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email<span className="font-extrabold text-red-500"> *</span>
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                    <span className="font-extrabold text-red-500"> *</span>
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Photo Url
                    <span className="font-extrabold text-red-500"> *</span>
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    type="url"
                    id="phoroUrl"
                    name="photoUrl"
                    placeholder="http://example.com"
                  />
                </div>
                <button
                  className="w-full bg-[#D1A054B2] disabled:bg-slate-200 hover:bg-[#ca9443b2] text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="my-4">
                  <p className="inline-block align-baseline text-[#D1A054] font-bold text-sm mr-1 ">
                    Already registered? Go to
                  </p>
                  <Link
                    to="/login"
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
                  >
                    Login
                  </Link>
                </div>
                <div className="my-4 text-center space-y-3">
                  <p>Or sign in with</p>
                  <SocialLogin setError={setError}></SocialLogin>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
