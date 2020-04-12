import { AUTH_LOADING, AUTH_ERROR, FINISHED_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case FINISHED_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    default:
      return state;
  }
}
