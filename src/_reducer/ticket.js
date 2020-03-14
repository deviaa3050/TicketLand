import { GET_TICKET } from "../config/constants";

const initState = {
  data: [],
  authenticated: false,
  loading: false,
  error: null
};

const ticket = (state = initState, action) => {
  switch (action.type) {
    case `${GET_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };

    case `${GET_TICKET}_FULFILLED`:
      console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        loading: false,
        error: null
      };

    case `${GET_TICKET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default ticket;
