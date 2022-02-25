import React, { useEffect, useState } from "react";
import { ListMoviesScreen } from "./components/ListMoviesScreen";

import "./styles/stylesListMovies.css";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Search, Resultado } from "./interface/response";
import { store, RootState } from './store/store';
import { searchMoviesTypes } from './actions/uiActions';
export const App = () => {
  

  
  
  return (
    <Provider store={store}>
      <ListMoviesScreen />

    </Provider>
     
  );
};
