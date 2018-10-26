import Constant from "../../constants";

/** Authentication User */
export const Authenticate = {
    signOut(history) {
      localStorage.removeItem(Constant.AUTH_TOKEN);
      localStorage.removeItem(Constant.USER_LOGIN);
      history.push("/login");
    }
  }