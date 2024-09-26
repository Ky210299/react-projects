import './App.css'
import { Movie } from './components/Movie';
// import { useRef } from 'react';
import { useState, useCallback } from 'react'
import { useMovie } from './customHooks/useMovies';
import { useSearch } from './customHooks/useSearch';
import debounce from 'just-debounce-it';

export function App() {
  const [sort, setSort] = useState(false);
  const { query, updateQuery, error } = useSearch();
  const { movies, getMovies, success, loading } = useMovie({ query, sort });

  // este valor persiste entre renderizaciones
  // const counter = useRef(0);
  // counter.current++
  // console.log(counter.current)

  // const inputRef = useRef();

  // esto es de forma no controlada porque no estas
  // confiando en los elemntos del dom
  // de forma controlada seria mediante un estado

  const debounceGetMovies = useCallback(debounce(query => {
    getMovies({ query: query })
  }, 400), [])
  const handlerSort = () => {
    setSort(!sort);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ query });

    // const fields = new FormData(event.target)
    // const query = fields.get('query')
    // console.log(fields)

    // recupero el elemento de la referencia
    // const inputEl = inputRef.current; const value = inputEl.value;
    // console.log(value);
  }

  //esto seria la forma controlada
  const handleChange = (event) => {
    const newQuery = event.target.value;
    updateQuery(newQuery);
    debounceGetMovies(newQuery);
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="query">
            <input autoComplete='off' onChange={handleChange} value={query} name='query' /*ref={inputRef}*/ placeholder={"Avengers, Star Wars"} />
            {error !== null && <i style={{ padding: '1rem', color: 'red' }}>{error.message}</i>}
          </label>
          <label className='sort-check-box' htmlFor="sort">
            Sort?
            <input type="checkbox" onChange={handlerSort} name="sort" checked={sort} />
          </label>
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        {
          (
            <ul className='movies'>
              {
                loading ? <strong className='no-movies'>LOADING...</strong> :
                  success
                    ?
                    movies.map(movie => <Movie key={movie.id} movie={movie} className='movie' />)
                    :
                    <p className='no-movies'>No movies found</p>
              }
            </ul>
          )
        }
      </main>
    </div >
  )
}
