import React from "react";

// const ButtonLoadingSpinner = React.lazy(() =>
//   import("pages/ButtonLoadingSpinner")
// );

const routes = [
    {
    enabled: true,
    path: "/AutoComplete",
    component: ,
    child: null,
  },
  {
    enabled: true,
    path: "/Tooltip",
    component: Tooltip,
    child: null,
  },
  {
    enabled: true,
    path: "/Modal",
    component: Modal,
    child: null,
  },


  ];

export default routes.filter((route) => route.enabled);
