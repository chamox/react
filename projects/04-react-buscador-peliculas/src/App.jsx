import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('debounce')
      getMovies({ search })
    }, 500),
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }
  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form
          id="search-form"
          className="form"
          onSubmit={handleSubmit}
        >
          <input
            id="search-input"
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Kill Bill, The Hateful Eight, Fight Club... "
          />
          <input
            id="sort-input"
            type="checkbox"
            onChange={handleSort}
            checked={sort}
          />
          <button type="submit">Search</button>
        </form>
        {error && (
          <p
            style={{ color: 'red' }}
            className="error"
          >
            {error}
          </p>
        )}
      </header>
      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
