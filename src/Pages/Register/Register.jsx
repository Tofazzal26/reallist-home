import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, setPhoto, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoURL;
    const email = data.email;
    const password = data.password;

    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Please ensure your password contains at least one uppercase and one lowercase letter!"
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Please ensure your password contains at least one uppercase and one lowercase letter!"
      );
    }

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Register Success");
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div>
          <div className="bg-[#ffffff] mt-14 shadow-loginSd lg:w-1/2 md:w-2/3 mx-auto">
            <div className="md:w-2/3 lg:w-2/3 mx-auto py-14">
              <h1 className="font-semibold text-lg lg:text-3xl md:text-2xl text-center">
                Register your account
              </h1>
              <div className="divider"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="lg:text-lg md:text-base text-sm font-semibold ">
                  Your Name
                </label>
                <br />

                <input
                  type="name"
                  name="name"
                  className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
                  placeholder="Enter  your name"
                  {...register("name", { required: true })}
                  required
                />

                <label className="lg:text-lg md:text-base text-sm font-semibold ">
                  Photo URL
                </label>
                <br />

                <input
                  type="text"
                  name="photoURL"
                  className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
                  placeholder="Enter  your photo url"
                  {...register("photoURL", { required: true })}
                  required
                />
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
                  required
                />
                <br />
                <label className="lg:text-lg  md:text-base text-sm font-semibold">
                  Password
                </label>
                <br />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="bg-[#f3f3f3] p-3 rounded-sm my-4 relative text-sm lg:text-base w-full outline-none text-[#9f9f9f]"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  required
                />
                <span
                  className="absolute cursor-pointer top-[660px] right-[710px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </span>

                <br />
                <button className="bg-[#1a56db] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
                  Register
                </button>
                <p className="font-semibold text-[#706f6f] text-sm lg:text-lg text-center">
                  Already have an account ?{" "}
                  <Link to="/login" className="text-[#1a56db]">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
