import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import JobDetails from "../components/JobDetails";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Membership from "../pages/Membership";
import Networking from "../pages/Networking";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/networking",
        element: <Networking />,
      },
      {
        path: `jobs/:jobId`,
        element: <JobDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Registration />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
