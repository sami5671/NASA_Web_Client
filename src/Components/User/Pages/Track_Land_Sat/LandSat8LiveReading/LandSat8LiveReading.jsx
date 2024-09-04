import UseToGetLandSatLocation from "../../../../../Hooks/LandSat8Api/UseToGetLandSatLocation";

const LandSat8LiveReading = () => {
  const [landSat8Position] = UseToGetLandSatLocation();

  // Helper function to convert timestamp to a readable date
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleString(); // Convert to local date and time
  };

  return (
    <>
      <h1 className="text-center mb-6 text-2xl text-slate-200 font-bold">
        NEXT PASS OF LANDSAT 8 OVER YOUR CURRENT LOCATION
        <hr />
      </h1>

      <div className="h-[180px] w-full overflow-x-auto">
        <table className="table table-pin-rows w-full">
          <thead className="sticky top-0  bg-slate-600 text-white">
            <tr className="">
              <th>No</th>
              <th>Date</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Altitude (km)</th>
              <th>Azimuth</th>
              <th>Elevation</th>
              <th>RA</th>
              <th>Dec</th>
              <th>Eclipsed</th>
            </tr>
          </thead>
          <tbody className="bg-blue-600 bg-transparent text-white">
            {landSat8Position?.positions?.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{convertTimestampToDate(item.timestamp)}</td>
                <td>{item?.satlatitude.toFixed(2)}</td>
                <td>{item?.satlongitude.toFixed(2)}</td>
                <td>{item?.sataltitude.toFixed(2)} km</td>
                <td>{item?.azimuth.toFixed(2)}</td>
                <td>{item?.elevation.toFixed(2)}</td>
                <td>{item?.ra.toFixed(2)}</td>
                <td>{item?.dec.toFixed(2)}</td>
                <td>{item?.eclipsed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LandSat8LiveReading;
