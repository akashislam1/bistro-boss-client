import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginbg from "../../assets/others/authentication.png";
import img1 from "../../assets/others/authentication1.png";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const [error, setError] = useState("");
  // const [disabled, setDisabled] = useState(true);  TODO: uncomment this line
  const { setUser, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        navigate(from, { replace: true });
        e.target.reset();
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleValidate = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      // setDisabled(false); TODO: uncomment this line
    } else {
      alert("Captcha validation failed");
      // setDisabled(true); TODO: uncomment this line
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div style={{ background: `url(${loginbg})` }} className="md:py-32">
        <div className="w-full md:w-3/4 mx-auto flex flex-col-reverse md:flex-row justify-center items-center shadow-2xl">
          <div>
            <img className="w-96" src={img1} alt="" />
          </div>
          <div className="p-5">
            <div className="flex justify-center items-center ">
              <form
                onSubmit={handleSubmit}
                className="w-full sm:w-80 p-6 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                {error && <span className="text-red-500"> {error}</span>}
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
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    type="text"
                    name="captcha"
                    placeholder="type the captcha"
                  />
                </div>

                <div className="mb-6 flex items-center justify-end">
                  <a
                    className="text-blue-500 hover:underline focus:outline-none focus:text-blue-600"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </a>
                </div>
                {/* To do : make button disabled */}
                <button
                  className="w-full bg-[#D1A054B2] disabled:bg-slate-200 hover:bg-[#ca9443b2] text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={false}
                >
                  Sign In
                </button>
                <div className="my-4">
                  <p className="inline-block text-[#D1A054] align-baseline font-bold text-sm mr-1 ">
                    New here? Create a New Account
                  </p>
                  <Link
                    to="/signup"
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
                  >
                    Sign up
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

export default Login;
