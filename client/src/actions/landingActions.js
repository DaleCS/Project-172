import { LANDING_ERROR } from "./types";

export const getLandingData = () => dispatch => {
  dispatch({
    type: LANDING_ERROR,
    payload: {}
  });
};
