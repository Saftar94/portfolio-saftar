import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

const AppRouter = () => {
  const user = false;

  return user ? (
    <Router>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Route to={CHAT_ROUTE} />
    </Router>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Route to={LOGIN_ROUTE} />
    </Routes>
  );
};

export default AppRouter;
