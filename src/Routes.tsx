import React from "react";
import RankPage from "./screen/RankPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./screen/HomePage";

export default function AppRoutes(): JSX.Element {
  const routeList = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/ranking",
      component: RankPage,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
