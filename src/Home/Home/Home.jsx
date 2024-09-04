import BannerDescription from "../BannerDescription/BannerDescription";
import Globe from "../Globe/Globe";

const Home = () => {
  return (
    <div>
      {/* home banner */}
      <div className="flex items-center mt-24">
        {/* banner text */}
        <div className="w-2/3">
          <BannerDescription />
        </div>
        {/* banner globe */}
        <div className="">
          <Globe />
        </div>
      </div>
      {/* home banner */}
    </div>
  );
};

export default Home;
