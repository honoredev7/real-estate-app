import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

import Properties from "views/Properties";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Tableau de bord",
    icon: "design_app",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Locataires",
    icon: "design_image",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/properties",
    name: "Biens Immobiliers",
    icon: "business_globe",
    component: <Properties />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Carte Immobilière",
    icon: "location_map-big",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Payements",
    icon: "files_paper",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Profile Utilisateur",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Statistiques",
    icon: "design-2_ruler-pencil",
    component: <Typography />,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Paramètres",
    icon: "objects_spaceship",
    component: <Upgrade />,
    layout: "/admin",
  },
];

export default dashRoutes;
