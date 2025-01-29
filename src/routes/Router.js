import { Navigate } from "react-router";
import { Children, lazy } from "react";
import { useRoutes } from "react-router";
import Users from "../components/pages/Users";

// lazy ile yüklenmesi gereken react bileşenlerini tanımlamak için kullanılır.
const UsersTable = lazy(() => import("../components/pages/Users"));
const DetailUser = lazy(() => import("../components/pages/Detail"));

function Routers({ customer, userId, setUserId }) {
  const id = userId;
  console.log("id:", id);
  const AppRoutes = [
    {
      path: "/",
      children: [
        { path: "", exact: true, element: <UsersTable customers={customer} /> },
      ],
    },
    {
      path: `/details/:${id}`,
      children: [
        {
          path: "",
          exact: true,
          element: <DetailUser customer={customer} />,
        },
      ],
    },
  ];

  let router = useRoutes(AppRoutes);
  return router;
}

export default Routers;
