import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { handleGoogleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    handleGoogleLogin().then((result) => {
     
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
       
        navigate("/");
      });
    });
  };

  return (
    <div className="p-8 w-full">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn w-full">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
