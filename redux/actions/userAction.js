import { USER_ACTIONS } from "../../constants/actions";

export const updateUser = (payload) => ({ type: USER_ACTIONS.UPDATE, payload });
export const removeUser = () => ({ type: USER_ACTIONS.REMOVE });
