import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useRef, useState } from 'react'

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
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })
  const inputRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    console.log({ search })
  }
  const handleChange = (event) => {
    setSearch(event.target.value)
    console.log('search:', search)
  }
  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            ref={inputRef}
            name="search"
            placeholder="Kill Bill, The Hateful Eight, Fight Club... "
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
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
