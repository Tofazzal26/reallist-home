import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoURL;
    updateUserProfile(name, photo)
      .then(() => {
        console.log("changed");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, photo);
  };

  return (
    <div className="md:w-2/3 lg:w-2/3 mx-auto py-14">
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
  );
};

export default UpdateProfile;
