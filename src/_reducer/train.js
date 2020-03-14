import { GET_TRAIN, GET_ALL_TRAIN } from "../config/constants";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: null
};

const train = (state = initState, action) => {
  switch (action.type) {
    case `${GET_TRAIN}_PENDING`:
    case `${GET_ALL_TRAIN}_PENDING`:
      return {
        ...state,
        loading: true
      };

    case `${GET_TRAIN}_FULFILLED`:
    case `${GET_ALL_TRAIN}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        loading: false,
        error: null
      };

    case `${GET_TRAIN}_REJECTED`:
    case `${GET_ALL_TRAIN}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default train;
