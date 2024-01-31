import withResults from '../mocks/withResults.json'
import withoutResults from '../mocks/withoutResults.json'
import { useState } from 'react'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search
  const mappedMovies = movies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }
  })

  const getMovies = () => {
    if (search) {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=ef3e0ef`)
        .then((response) => response.json())
        .then((data) => setResponseMovies(data))
    } else {
      setResponseMovies(withoutResults)
    }
  }
  return { movies: mappedMovies, getMovies }
}
