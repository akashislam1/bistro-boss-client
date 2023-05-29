import { useContext } from "react";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ setError }) => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <FaFacebookF className="border-2 border-black rounded-full text-4xl p-2 cursor-pointer"></FaFacebookF>
      <FaGoogle
        onClick={handleGoogleLogin}
        className="border-2 border-black rounded-full text-4xl p-2 cursor-pointer"
      ></FaGoogle>
      <FaGithub className="border-2 border-black rounded-full text-4xl p-2 cursor-pointer"></FaGithub>
    </div>
  );
};

export default SocialLogin;
