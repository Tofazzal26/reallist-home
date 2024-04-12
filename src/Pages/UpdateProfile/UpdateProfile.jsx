import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { updateUserProfile, user } = useContext(AuthContext);

  const { email, displayName, photoURL } = user || {};

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoURL;
    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Profile Update Successful");
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-2/3 lg:w-2/3 mx-auto py-14">
      <Helmet>
        <title>Reallist Homes | UpdateProfile</title>
      </Helmet>
      <h1 className="font-semibold text-lg lg:text-3xl md:text-2xl my-10 text-center">
        Update Your Profile ?
      </h1>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
          <div className="col-span-1">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={photoURL} />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-2xl">{displayName}</h1>
                <h1>{email || "Not Found"}</h1>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="lg:text-lg md:text-base text-sm font-semibold ">
                New name
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
                New photo URL
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

              <br />
              <button className="bg-[#1a56db] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
                Save Change
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UpdateProfile;
