import { FETCH_SURVEYS } from "../_actions/types";

// eslint-disable-next-line
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
