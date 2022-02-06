import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import UsersManagement from "./components/UsersManagement/UsersManagement";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { Routes } from "./constants";
import { UserContextProvider } from "./components/UserContext";

import "./style/styles.scss";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense } from "react";

const App = () => (
  <Router>
    <Switch>
      {/* <Suspense fallback={<LoadingScreen />}> */}
      <PublicRoute path={Routes.Login} component={Login} />
      <PrivateRoute
        path={Routes.Users}
        component={() => (
          <UserContextProvider>
            <UsersManagement />
          </UserContextProvider>
        )}
      />
      <PrivateRoute
        path={Routes.Root}
        component={() => <Redirect to={Routes.Users} />}
      />
      {/* </Suspense> */}
    </Switch>
  </Router>
);

export default App;
