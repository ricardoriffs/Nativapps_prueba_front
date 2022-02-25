import { types } from "../types/types";

const initialState = {
  title: "",
  year: 0,
  type: 0,
  page: 1,
  typesMovies: []
};

export const filterReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case types.setFilter:
      return {
        ...state,
        ...action.payload
      };
    case types.setTypesMovies: 
      return {
        ...state,
        typesMovies: action.payload
      }
    default:
      return state;
  }
};
