import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { Resultado } from "../interface/response";
import { setFilter } from '../actions/filterAction';
import { RootState } from '../store/store';
import { getMovies } from '../actions/moviesAction';
import { fillDatabase, searchMoviesTypes } from '../actions/uiActions';


interface props {
  setMovies: Dispatch<SetStateAction<string[]>>;
}

export const SearchMovie = () => {

  //useDispatch for dispatch action 
  const dispatch = useDispatch()




  const {title: title2, page, type: type2, year: year2, typesMovies} = useSelector((state:RootState) => state.filter)


  const [form, handleInputChange] = useForm({
    title: title2,
    type: type2,
    year: year2,
    page: page,
  });

  const { title, type, year } = form;

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length >= 3) {
      // setMovies((movies) => [inputValue, ...movies]);
      setInputValue("");
    }
  };

  const handleUpdateDb = () => {
    dispatch(fillDatabase())
    console.log('Actualizando database');
  }
  useEffect(() => {
    dispatch(setFilter({title,type,year}))

    if(title.trim().length > 3){
      
      dispatch(getMovies(title, year, parseInt(type), page))
    }
  }, [dispatch, title, type, year, page])
 
  useEffect(()=> {
    dispatch(searchMoviesTypes())
  }, [dispatch])

  return (
    <form className="searchMovie" onSubmit={handleSubmit}>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          Title{" "}
        </label>
        <input
          className="searchMovie__input searchMovie__input-title"
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder=""
        />
      </div>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          {" "}
          Year{" "}
        </label>
        <input
          className="searchMovie__input searchMovie__input-years"
          type="number"
          name="year"
          value={year}
          onChange={handleInputChange}
        />
      </div>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          {" "}
          Type{" "}
        </label>
        <select
          className="searchMovie__select"
          name="type"
          id=""
          value={type}
          onChange={handleInputChange}
        >
          <option value={undefined}> Select option </option>
          {
            typesMovies.map((type:any) => (
              <option key={type.movieType_id} value={type.movieType_id}> {type.movieType} </option>

            ))
          }
          
        </select>
      </div>
      <div className="searchMovie__boxInput">
        <button className="searchMovie__button" onClick={handleUpdateDb}>
          Actualizar db
        </button>

      </div>
    </form>
  );
};
