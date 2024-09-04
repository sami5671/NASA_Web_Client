import LandSat8LiveReading from "./LandSat8LiveReading/LandSat8LiveReading";
import LandSatMap from "./LandSatMap/LandSatMap";
import UserInputLandSarToTrack from "./UserInputLandSatToTrack/UserInputLandSarToTrack";

const TrackLandSat = () => {
  return (
    <div>
      <h1 className="text-center text-white text-4xl">
        Here you can track Land sat
      </h1>

      <div className="flex items-center gap-4 mt-24">
        {/* visual direction of the landsat 8 */}
        <div>
          <LandSatMap />
        </div>
        {/* input form user */}
        <div className="w-[600px]">
          <UserInputLandSarToTrack />
        </div>
      </div>
      {/* landsat 8 live reading  */}
      <div>
        <div>
          <LandSat8LiveReading />
        </div>
      </div>
    </div>
  );
};

export default TrackLandSat;
