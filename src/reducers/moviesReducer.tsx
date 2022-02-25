import { types } from "../types/types";

const initialState = {
    movies: [],
    totalPage: 0
}

export const moviesReducer = (state= initialState, action: {type: string, payload: any }) => {
  
    switch (action.type) {
        case types.setMovies:
            return {
                ...state,
                movies: action.payload.movies,
                totalPage: action.payload.totalPage
            }
    
        default:
            return state;
    }
}
