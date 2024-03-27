//** components imported */
import Banner from "../../auth/Banner";
import Dashboard from "../../Dashboard";
// import Referral from "./pages/referral/referral"
// import PageNotFound from "../../not-found/404";
import Login from "../../auth/login";
const protectedRoutes = [
    {
        path: "/dashboard",
        component: <Dashboard />,
        exact: true,
      },
];
const publicRoutes = [
  {
    path: "/",
    component: <Banner />,
    exact: true,
  },
  {
    path: "/login",
    component: <Banner />,
    exact: true,
  },
];

export { protectedRoutes, publicRoutes };
