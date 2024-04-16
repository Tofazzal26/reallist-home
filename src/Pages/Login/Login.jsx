import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../FireBase/Firebase.config";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { logInEmailPassword, setNotLoading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Google Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        toast.success("Github Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    logInEmailPassword(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Please enter a valid email & password");
      });
  };

  return (
    <div>
      <div>
        <div data-aos="zoom-in-down">
          <Helmet>
            <title>Reallist Homes | Login</title>
          </Helmet>
          <div className="bg-[#ffffff] mt-14 shadow-loginSd lg:w-1/2 md:w-2/3 mx-auto">
            <div className="md:w-2/3 lg:w-2/3 mx-auto py-14">
              <h1 className="font-semibold text-lg lg:text-3xl md:text-2xl text-center">
                Login your account
              </h1>
              <div className="divider"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="lg:text-lg md:text-base text-sm font-semibold ">
                  Email Address
                </label>
                <br />

                <input
                  type="email"
                  name="email"
                  className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
                  placeholder="Enter  your email address"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600">This Email field is required</p>
                )}

                <label className="lg:text-lg  md:text-base text-sm font-semibold">
                  Password
                </label>
                <br />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="bg-[#f3f3f3] p-3 rounded-sm my-4 text-sm lg:text-base w-full outline-none text-[#9f9f9f]"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className="text-red-600">
                      This Password field is required
                    </p>
                  )}

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute cursor-pointer top-[30px] right-[15px]"
                  >
                    {showPassword ? (
                      <FaEye size={20} />
                    ) : (
                      <FaEyeSlash size={20} />
                    )}
                  </span>
                </div>

                <div className="flex justify-center gap-2">
                  <p
                    onClick={googleLogin}
                    className="flex items-center border-2 gap-2 cursor-pointer rounded-full p-2"
                  >
                    <FcGoogle color="#1a56db" size={30} />
                    <span className="font-semibold text-[12px] lg:text-base">
                      Continue with Google
                    </span>
                  </p>
                  <p
                    onClick={githubLogin}
                    className="flex items-center border-2 gap-2 cursor-pointer rounded-full p-2"
                  >
                    <FaGithub color="#087609" size={30} />
                    <span className="font-semibold text-[12px] lg:text-base">
                      Continue with Github
                    </span>
                  </p>
                </div>

                <br />
                <button className="bg-[#1a56db] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
                  Login
                </button>
                <p className="font-semibold text-[#706f6f] text-sm lg:text-lg text-center">
                  Do not Have An Account ?{" "}
                  <Link to="/register" className="text-[#1a56db]">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
