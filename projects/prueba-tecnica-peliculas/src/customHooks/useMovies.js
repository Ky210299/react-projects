import { useState, useRef, useMemo, useCallback } from 'react';
import { getQuery } from '../utils';

export function useMovie({ query, sort }) {
  const [res, setRes] = useState({ movies: [], success: false });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const lastQuery = useRef('')
  const lastSort = useRef(sort);


  const mapMovie = movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  });

  const sortMovies = (movies) => {
    return [...movies].sort((a, b) => a.title.localeCompare(b.title));
  }

  // useCallback(arrow-function) === useMemo(()=> {return arrow-function})
  const getMovies = useCallback(({ query }) => {
    if (!query || query === lastQuery.current) return
    setLoading(true);
    lastQuery.current = query
    const endpoint = getQuery({ title: query });

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        if (data.Response !== 'True') {
          setRes({
            movies: [],
            success: false,
            total: 0
          })
        } else
          setRes({
            movies: data.Search.map(movie => mapMovie(movie)),
            success: data.Response === 'True',
            total: data.totalResults
          })
        setError(null)
      })
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false)
      });
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? { ...res, movies: sortMovies(res.movies) }
      : res
  }, [sort, res])
  return { ...sortedMovies, getMovies, loading }
}

