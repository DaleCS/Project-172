import { LANDING_ERROR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LANDING_ERROR:
      return payload;
    default:
      return state;
  }
}
