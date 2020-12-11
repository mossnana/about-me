import { USER_ACTIONS } from "../../constants/actions";
import { User } from "../../models/User";
import { getLocalStorage } from "../../helpers/local_storage";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS.UPDATE:
      return { ...state, user: payload };
    case USER_ACTIONS.REMOVE:
      return { ...state, user: {} };
    default:
      let user = getUserLocalStorage();
      if (!user) return state;
      return user;
  }
};

const getUserLocalStorage = () => {
  let persistUser = getLocalStorage('user', undefined)
  if(!persistUser) return undefined
  return User.fromJSON(JSON.parse(persistUser))
};

export default userReducer;
