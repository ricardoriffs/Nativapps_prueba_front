import { Filter } from '../interface/response';
import { types } from '../types/types';



export const setFilter = (filter: Filter) => ({type: types.setFilter, payload: filter})