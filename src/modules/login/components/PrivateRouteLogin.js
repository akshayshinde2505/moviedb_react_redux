import React from "react";
import { Route, Redirect } from "react-router-dom";
import Constant from "../../../constants";

const PrivateRouteLogin = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem(Constant.USER_LOGIN) ? (
        <Redirect to={{ 
            pathname: '/movie',
            state: { form: props.location}
          }} />
      ) : (
        <Component {...props} />
      )
  )} />
)

export default PrivateRouteLogin;