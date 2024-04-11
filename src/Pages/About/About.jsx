import aboutImg from "../../../public/About/about.jpg";

const About = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="text-4xl text-center my-2 font-semibold">About Us</h1>
        <p className="lg:text-base text-sm text-[#4a5568] text-center font-semibold mx-auto lg:w-[800px]">
          At Reallist, we believe in more than just buying and selling houses.
          We believe in building relationships, creating communities, and
          helping our clients find their perfect place to call home.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
            <img src={aboutImg} alt="" />
          </div>
          <div className="col-span-1 bg-[#31323c] text-white">
            <div className="p-8 space-y-3">
              <h1 className="text-4xl">Experience since 1997</h1>
              <p className="text-[#bc986b] font-semibold text-lg">Our Goal</p>
              <p>
                We have been working since 1999 to be sure you are getting the
                best Reallist service possible.
              </p>
              <p>
                Reallist aims to unite Reallist brokers to provide their clients
                and partners with the top-notch level of brokerage services
                throughout the USA.
              </p>
              <p className="text-[#bc986b] font-semibold text-lg">
                Our Mission
              </p>
              <p>
                Our mission is to be the most successful Reallist firm in the
                local states and beyond.
              </p>
              <p>
                Reallist incorporates proven, professional state of-the-art
                techniques specializing in the marketing, listing and selling of
                new and resale luxury homes.
              </p>
              <button className="px-6 py-2 bg-[#bc986b] text-white font-semibold">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
