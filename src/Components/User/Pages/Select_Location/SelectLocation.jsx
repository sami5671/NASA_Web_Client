import React from "react";
import Map from "./Map/Map";
import LocationInput from "./LocationInput/LocationInput";

const SelectLocation = () => {
  return (
    <>
      {" "}
      <div>
        <h1 className="text-center text-white text-4xl">
          Select your location
        </h1>
      </div>
      {/* map and input */}
      <div className="flex items-center justify-center gap-2 mt-24">
        {/* map */}
        <div className="w-full opacity-95">
          <Map />
        </div>
        {/* user input */}
        <div className="w-full">
          <LocationInput />
        </div>
      </div>
    </>
  );
};

export default SelectLocation;
