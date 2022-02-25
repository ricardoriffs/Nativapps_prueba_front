import { types } from "../types/types";

const initialState = {
    message: '',
    error: false,
    loading: false,
    firstTime: true
    
}

export const uiReducer = (state= initialState, action: {type: string, payload?: any }) => {
  
    switch (action.type) {
        case types.setMessage:
            return {
                ...state,
                message: action.payload
            }
        case types.loading:
            return {
                ...state, 
                loading: true,
            }
        case types.loaded:
            return {
                ...state, 
                loading: false,
            }
        case types.setError: 
            return {
                ...state,
                error: action.payload
            }
        case types.changeFirsTime: 
        return {
            ...state,
            firstTime: false
        }
        default:
            return state;
    }
}
