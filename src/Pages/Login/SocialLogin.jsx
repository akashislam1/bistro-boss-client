import { useContext } from "react";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = ({ setError }) => {
  const { setUser, googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleLoginUser = result.user;
        setUser(googleLoginUser);
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
