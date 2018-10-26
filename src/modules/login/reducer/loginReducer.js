import actionType from "../constants";

const initialState = {
    username: "",
    password: "",
    redirectToReferrer: false,
    openSnackBar: false,
    snackBarMessage: "",
    snackBarType: "",
}

const loginReducer = (state = initialState, action) => {

    switch(action.type) {
       case actionType.LOGIN_REQUEST: 

    }
    return state;
}

export default loginReducer;