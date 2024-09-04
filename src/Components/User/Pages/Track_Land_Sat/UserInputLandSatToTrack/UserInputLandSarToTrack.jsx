

const UserInputLandSarToTrack = () => {
  return (
    <>
      {" "}
      <div className="bg-slate-900 px-16 py-10 lg:h-[400px] opacity-80 rounded-2xl">
        <div className="">
          <div>
            <h1 className="text-center text-white font-bold text-2xl">
              Please Select Your Location
            </h1>
          </div>
          <form>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-white">
                Latitude
              </label>
              <input
                type="number"
                name="latitude"
                required
                placeholder="📌 Enter Latitude here (Latitude: 42.54299)"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mt-6 mb-2 text-sm text-white"
              >
                Longitude
              </label>
              <input
                type="number"
                name="longitude"
                required
                placeholder="📌 Enter longitude here (Longitude: -66.55041)"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="bg-red-900 w-full rounded-md py-3 text-white hover:bg-red-700"
              >
                Confirm Selection
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserInputLandSarToTrack;
