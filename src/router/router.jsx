import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home/Home";
import Register from "../Authentication/Register/Register";
import TrackLandSat from "../Components/User/Pages/Track_Land_Sat/TrackLandSat";
import SelectLocation from "../Components/User/Pages/Select_Location/SelectLocation";
import Notification from "../Components/User/Pages/Notification/Notification";
import Profile from "../Components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trackLandSat",
        element: <TrackLandSat />,
      },
      {
        path: "/selectLocation",
        element: <SelectLocation />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
