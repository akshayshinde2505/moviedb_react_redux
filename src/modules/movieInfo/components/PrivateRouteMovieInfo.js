import React from "react";
import { Route, Redirect } from "react-router-dom";
import Constant from "../../../constants";

const PrivateRouteMovieInfo = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem(Constant.USER_LOGIN) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ 
          pathname: '/login',
          state: { form: props.location}
        }} />
      )
  )} />
)
export default PrivateRouteMovieInfo;