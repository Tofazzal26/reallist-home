import { BiSolidPhoneCall } from "react-icons/bi";
import agent1 from "../../../public/About/agent1.jpg";
import agent2 from "../../../public/About/agen2.jpg";
import agent3 from "../../../public/About/agent3.jpg";
import agent4 from "../../../public/About/agent4.jpg";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div>
      <h1 className="text-4xl my-8">Our Agents</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="flex gap-6 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={agent1} />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Frank Marshall</h1>
            <span className="flex text-xl gap-2 items-center">
              <BiSolidPhoneCall size={30} /> 374-416-2931
            </span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={agent2} />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Mike Stewart</h1>
            <span className="flex text-xl gap-2 items-center">
              <BiSolidPhoneCall size={30} /> 374-416-2931
            </span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={agent3} />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Julia Smith</h1>
            <span className="flex text-xl gap-2 items-center">
              <BiSolidPhoneCall size={30} /> 374-416-2931
            </span>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={agent4} />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl">Fransico Moines</h1>
            <span className="flex text-xl gap-2 items-center">
              <BiSolidPhoneCall size={30} /> 374-416-2931
            </span>
          </div>
        </div>
      </div>
      <div className="divider w-full"></div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          <div className="col-span-2">
            <h1 className="text-4xl my-8">Send a Message</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="lg:text-lg md:text-base text-sm font-semibold ">
                    Name
                  </label>
                  <br />

                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
                    placeholder="Enter  your name"
                    {...register("name", { required: true })}
                    required
                  />
                </div>
                <div>
                  <label className="lg:text-lg md:text-base text-sm font-semibold ">
                    Email
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
                </div>
              </div>

              <br />
              <label className="lg:text-lg  md:text-base text-sm font-semibold">
                Message
              </label>

              <br />
              <textarea
                placeholder="Message..."
                className="textarea textarea-bordered textarea-lg w-full h-[250px]"
              ></textarea>
              <br />
              <button className="bg-[#1a56db] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
                Send
              </button>
            </form>
          </div>
          <div className="col-span-1">
            <h1 className="text-4xl my-8">Get in Touch</h1>
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="flex text-xl gap-2 items-center">
                  <BiSolidPhoneCall size={36} />{" "}
                  <span className="flex flex-col gap-2">
                    <span>Phone Number</span>
                    <span>374-416-2931</span>
                  </span>
                </h1>
              </div>
              <div className="space-y-4">
                <h1 className="flex text-xl gap-2 items-center">
                  <AiOutlineMail size={36} />{" "}
                  <span className="flex flex-col gap-2">
                    <span>Email</span>
                    <span>info@yoursite.com</span>
                  </span>
                </h1>
              </div>
              <div className="space-y-4">
                <h1 className="flex text-xl gap-2 items-center">
                  <FaLocationDot size={36} />{" "}
                  <span className="flex flex-col gap-2">
                    <span>Location</span>
                    <span>123 Homes Street Chicago, IL 60606</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
