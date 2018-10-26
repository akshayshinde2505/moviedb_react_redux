// export const TEXT_CHANGE = "TEXT_CHANGE";
// export const OPEN_SNACK_BAR = "OPEN_SNACK_BAR";
// export const CLOSE_SNACK_BAR = "CLOSE_SNACK_BAR";
// export const REDIRECT_REFERENCE = "REDIRECT_REFERENCE";

import LoginConstants from '../constants'
import Constants from "../../../constants";
import Request from "../../../services/http-request";

export default {
    login: (username, password) => {
        return dispatch => {
            console.log('---------- Dispatching Login Request ---------------')
            dispatch({
                type: LoginConstants.LOGIN_REQUEST
            })

            Request.post(`/users/login`, {username, password})
            .then((response) => {
                localStorage.setItem(Constants.AUTH_TOKEN, response.accessToken);
                localStorage.setItem(Constants.USER_LOGIN, true);
                console.log('---------- Dispatching Login Success ---------------')
                dispatch({
                    type: LoginConstants.LOGIN_SUCCESS
                })
            })
            .catch((response) => {
                console.log(response);
                // if(response.ok === false) {
                //     this.setState({ 
                //         openSnackBar: true,
                //         snackBarMessage: "Username or Password Invalid.",
                //         snackBarType: "error"
                //     });
                // }

                console.log('---------- Dispatching Login Failure ---------------')

                dispatch({
                    type: LoginConstants.LOGIN_FAILURE,
                    payload: {
                        error: "Username or Password Invalid."
                    }
                })
            });
            

        }
    },
    logout: () => {
        return dispatch => {
            
        }
    }
}