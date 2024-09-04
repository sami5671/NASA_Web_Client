import LandSat8LiveReading from "./LandSat8LiveReading/LandSat8LiveReading";
import LandSatMap from "./LandSatMap/LandSatMap";
import UserInputLandSarToTrack from "./UserInputLandSatToTrack/UserInputLandSarToTrack";

const TrackLandSat = () => {
  return (
    <div>
      {/* landsat 8 live reading  */}
      <div>
        <div>
          <LandSat8LiveReading />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        {/* visual direction of the landsat 8 */}
        <div>
          <LandSatMap />
        </div>
        {/* input form user */}
        <div className="w-[600px]">
          <UserInputLandSarToTrack />
        </div>
      </div>
    </div>
  );
};

export default TrackLandSat;
