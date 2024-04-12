import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Estate from "../../Components/Estate/Estate";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Reallist Homes | Home</title>
      </Helmet>
      <Banner />
      <Estate />
    </div>
  );
};

export default Home;
