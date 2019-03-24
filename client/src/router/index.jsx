import homePage from "../views/HomePage";
import formPage from "../views/FormPage";
import dashboardPage from "../views/DashboardPage"

const indexRoutes = [
  { path: "/form", name: "formPage", component: formPage },
  { path: "/dashboard", name: "dashboardPage", component: dashboardPage },

  // home path must come last
  { path: "/", name: "homePage", component: homePage },
];

export default indexRoutes;
