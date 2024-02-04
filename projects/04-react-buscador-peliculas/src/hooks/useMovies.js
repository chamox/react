import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies' // Import the service function

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
      const newMovies = await searchMovies(search) // Call the service function
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
      console.error('Error searching movies', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return {
    movies: sortedMovies,
    getMovies,
    loading,
  }
}
