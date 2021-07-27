import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingOutlined } from "@ant-design/icons";

import { Provider } from "./Provider/GlobalState";
import GlobalStyle from "./GlobalStyles";
import MainPage from "./mainPage/MainPage";
import Login from "./mainPage/Login";
import Signup from "./mainPage/Signup";
import Profile from "./Profile/Profile";
import Blog from "./blog/Blog";
import Save from "./Save";
import WelcomeToMonez from "./First-login/WelcomeToMonez";
import LogOutPage from "./Profile/LogOutPage";
import Metting from "./videoMeetings/Metting";

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            {isLoading ? (
              <LoadingOutlined
                style={{
                  fontSize: "5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20%",
                  textAlign: "center",
                }}
              />
            ) : isAuthenticated ? (
              <Redirect to="/welcome" />
            ) : (
              <MainPage />
            )}
          </Route>

          <Route exact path="/home" component={MainPage} />
          <Route path="/welcome" component={WelcomeToMonez} />
          {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/blog" component={Blog} />
          <Route path="logged-out" component={LogOutPage} />
          <Route path="/meeting" component={Metting} />
        </Switch>
      </Router>
      <GlobalStyle />
    </Provider>
  );
}
