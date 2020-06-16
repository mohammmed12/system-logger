import {
  TECHS_ERROR,
  SET_LOADING,
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
} from "../actions/types";

const initialState = {
  techs: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TECHS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};
