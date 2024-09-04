import Globe from "../Globe/Globe";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-white text-4xl">
        Find Your precious Land
      </h1>

      {/* home banner */}
      <div className="flex items-center gap-12">
        {/* banner text */}
        <div>
          <h1 className="text-white">All Info Will here</h1>
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
