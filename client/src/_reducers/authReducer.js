import { FETCH_USER } from "../_actions/types";

// eslint-disable-next-line
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      // '' || false => false
      return action.payload;
    default:
      return state;
  }
}
