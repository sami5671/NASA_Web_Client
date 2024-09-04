import { useState } from "react";
import Login from "../../Authentication/Login/Login";

const BannerDescription = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      {" "}
      <div className="py-12 px-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div>
          <h1 className="text-5xl text-white font-bold leading-tight">
            Integrate your Ground-Based <br /> Measurement with Satellite
            Insights
          </h1>
        </div>
        {/* description */}
        <div className="text-white text-[17px] mt-6 mb-8">
          <p className="leading-relaxed">
            Define target locations, receive real-time notifications of Landsat
            flyovers, and access the corresponding satellite data, all in one
            cohesive platform. This tool fosters experiential learning,
            scientific exploration, and spatial thinking, making it easier for
            individuals to engage with and analyze Earth's land surface. By
            bridging the gap between ground measurements and satellite data,
            users can contribute to a deeper understanding of our planet.
          </p>
        </div>
        {/* get started button */}
        <div>
          <button
            onClick={openLoginModal}
            className="px-8 py-3 bg-white text-blue-900 font-semibold text-lg rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Get Started
          </button>
        </div>
      </div>
      <Login
        isLoginOpen={isLoginOpen}
        openLoginModal={openLoginModal}
        closeLoginModal={closeLoginModal}
      />
    </>
  );
};

export default BannerDescription;
