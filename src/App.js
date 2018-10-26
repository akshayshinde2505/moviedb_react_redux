import React, { Component } from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core/styles";
import appTheme from "./styles/appTheme";
import AppBarHorizontal from "./modules/common/AppBarHorizontal";
import FooterApp from "./modules/common/FooterApp";
import LoginContainer from "./modules/login/containers/LoginContainer";
import SignUpContainer from "./modules/signUp/containers/SignUpContainer";
import MovieInfoContainer from "./modules/movieInfo/containers/MovieInfoContainer";
import PrivateRouteMovieInfo from "./modules/movieInfo/components/PrivateRouteMovieInfo";
import PrivateRouteLogin from "./modules/login/components/PrivateRouteLogin";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={appTheme}>
        <div>
          <AppBarHorizontal />
          <Switch>
            <PrivateRouteMovieInfo path="/movie" component={MovieInfoContainer} />
            <PrivateRouteLogin path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer} />        
          </Switch>
          <FooterApp />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
